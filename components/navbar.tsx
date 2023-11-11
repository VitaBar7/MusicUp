import Link from 'next/link'
import SpotifyLoginButton from "@component/components/spotify-login-button";
import React, {useContext, useEffect, useState} from "react";
import {getUserInfo} from "@component/api/user-profile";
import {AuthContext} from "@component/context";
import Image from 'next/image'
import { GetUserInfoResponse } from '@component/api/types';


export default function Navbar() {
    const{ userAccessToken, isUserAuthenticated } = useContext(AuthContext)
    const [ userDisplayName, setUserDisplayName] = useState<string | undefined>(undefined)

    useEffect(() => {
        if(isUserAuthenticated) {
            getUserInfo(userAccessToken)
                .then(response => {
                    if(response !== null)
                    setUserDisplayName(response.display_name)
                }
                    )
        }
    }, [isUserAuthenticated])

    return (
        <>
        <div className="z-10 fixed whitespace-pre-wrap flex left-0 top-0 w-full items-center justify-between border-b border-gray-300 from-zinc-200 py-1 xs:max-sm:py-1 backdrop-blur-2xl">
            
            <Link href='/'>
                <Image className="ml-3 xs:max-sm:hidden rounded-full hover:" src={'/images/songseekr-vinyl-left.png'} alt={''} width={210} height={36}/>
                <Image className="hidden rounded-full w-2/3 ml-1 xs:max-sm:block" src={'/images/songseeker-white.png'} alt={''} width={150} height={30}/>    
            </Link>
            <div className="flex flex-col">
                <ul className="flex order-last flex-row flex-end gap-6 text-white mt-4 mr-10 xs:max-sm:mr-4 xs:max-sm:gap-4 xs:max-sm:text-sm hover:text-dirty-white">
                    <Link href='/'><li className="mt-1 hover:scale-110 xs:max-sm:mt-0"><img src="/icons8-home-48.png" width="24px" height="auto"/></li></Link>
                    <Link href='/about'><li>About</li></Link>
                    <Link href="/blog"><li>Blog</li></Link>
                    <Link className="mt-1 hover:scale-110 xs:max-sm:mt-0" href='/favorites'><li><img src="/icons8-heart-filled-24.png"></img></li></Link>
                </ul> 
                <ul className="flex flex-row justify-around xs:max-sm:mr-0"> 
                    {isUserAuthenticated && <li className="font-thin mt-1"> <span className="font-light">{userDisplayName}</span></li>}
                    <li className="flex-end xs:max-sm:mt-1"><SpotifyLoginButton></SpotifyLoginButton></li>
                </ul>

            </div>
      </div>
        </>
    )
}