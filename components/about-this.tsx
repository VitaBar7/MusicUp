import React from 'react'
import Link from 'next/link'


export default function AboutThis() {
    return (
        <div className="w-2/3 mt-20 mb-20 grid grid-cols-1 self-center text-center align-middle xs:max-sm:w-full xs:max-sm:mb-24 xs:max-sm:mt-1">
            <Link
            href="/about"
            className="group rounded-lg backdrop-blur-2xl border-transparent mx-1 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-lg font-thin tracking-wider text-white`} style={{'letterSpacing':'15px'}}>
                ABOUT  THIS{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;
                </span>
            </h2>
            <p className={`m-0 italic text-sm font-thin whitespace-pre-line tracking-wider text-white opacity-80 xs:max-sm:text-xs`}>
                This is a site about music. 
                <br></br>
                Log in with your spotify account, look up for a song or an artist you're curious about or would like to listen to. 
                <br></br>
                See the lyrics, some info and enjoy!
            </p>
            </Link>
        </div>
    )
}