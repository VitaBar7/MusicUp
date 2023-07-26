
'use client'
import { useState, Fragment, useContext, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Mood, Playlist } from '@component/api/types'
import { AuthContext } from '@component/context'
import { supabase } from '@component/utils/supabaseClient'
import { getPlaylist } from '@component/api/get-playlist'
import { playPlayList } from '@component/api/player'
import {WebPlayBackContext} from "@component/context/webPlayBackContext";


export default function Modal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const[moodList, setMoodList] = useState<Mood[]>([])
  const [playlist, setPlaylist] = useState<Playlist>()
  const { deviceId } = useContext(WebPlayBackContext)
  const { userAccessToken } = useContext(AuthContext)

  useEffect(() => {
    console.log(playlist?.id)
   }, [playlist])

    useEffect(() => {
        getMoodList().then((playlists)=> {
            const temporaryMoodList:Mood[] = []

            playlists.playlists?.map((mood:Mood) => {
                //console.log(mood)
                temporaryMoodList.push(mood)
            })
            setMoodList(temporaryMoodList)
    })
    }, [])

    const handleClick = (id:string) => {
        //console.log(id)
        if(id) {
            getPlaylist(userAccessToken, id)
            .then(async response => {
                    setPlaylist(response)
                    await playPlayList(response.id, deviceId, userAccessToken)
                }
            )
        }
    }

    async function getMoodList() {
        const { data: playlists, error } = await supabase
        .from('playlists')
        .select('mood, spotify_id')
        console.log(playlists)
        return {
            playlists
          }
      }


  return (
    <div>
      {/* 1. The button */}
      <button
        className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group hover:scale-110"
        onClick={() => { setModalOpen(true) }}
        aria-label="Watch the video"
      >
        {/* Play icon */}
        <svg className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
          <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
          <path className="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
        </svg>
      </button>
      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          {/* 2. The backdrop layer */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* 3. The modal video */}
          <Transition.Child
            className="fixed inset-0 z-[99999] flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="max-w-5xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                <h1 className="text-2xl font-sans tracking-wide italic font-thin text-white whitespace-pre-line m-10 mt-12 sm:max-md:text-xl xs:max-sm:text-lg xs:max-sm:font-thin xs:max-sm:m-6">Pick your mood to get the right playlist!</h1>
                <div className="flex flex-col space-between">
                    <ul className="text-dark-grey bg-white backdrop-blur-2xl xs:px-10 pt-5 pb-6 hover:">
                        {moodList?.map((mood) => {
                            return (
                                <>
                                <div className="flex">
                                    <li className="self-start mb-3 font-thin xs:text-md"><button className="border border-dark-grey me-auto text-dirty-white bg-dark-grey rounded-full mr-2 px-2 mb-3 hover:bg-dark-grey hover:text-dirty-white hover:px-3" onClick= {() =>{
                                    handleClick(mood.spotify_id)
                                    setModalOpen(false)
                                    }}>&gt;</button> {mood.mood}
                                    </li>
                                </div>
                                </>
                            )}
                        )}
                    </ul>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}