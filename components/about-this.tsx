import React from 'react'
import Link from 'next/link'


export default function AboutThis() {
    return (
        <div className="mt-16 mb-20 grid self-end text-center  lg:mb-0 lg:grid-cols-2 lg:text-left md:self-center xs:max-lg:self-center">
            <Link
            href="/about"
            className="group rounded-lg backdrop-blur-2xl border border-transparent mx-1 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl text-white`}>
                About this{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] italic text-xs font-light  tracking-wide text-white opacity-80`}>
                This is a site about music. Look up for a song or an artist you would like to listen to. See the lyrics, some info and enjoy!
            </p>
            </Link>
        </div>
    )
}