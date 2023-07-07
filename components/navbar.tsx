import Link from 'next/link'
import SpotifyLoginButton from "@component/components/spotify-login-button";
import React, {useContext, useEffect, useState} from "react";
import {getUserDisplayName} from "@component/api/user-profile";
import {AuthContext} from "@component/context";


export default function Navbar() {
    const{ userAccessToken, isUserAuthenticated } = useContext(AuthContext)
    const [ userDisplayName, setUserDisplayName] = useState<string>("")

    useEffect(() => {
        if(isUserAuthenticated) {
            getUserDisplayName(userAccessToken)
                .then(response => setUserDisplayName(response))
        }
    }, [isUserAuthenticated])

    return (
        <>
        <div className="z-10 fixed whitespace-pre-wrap flex left-0 top-0 w-full items-center justify-between border-b border-gray-300 from-zinc-200 py-3 xs:max-sm:py-1.5 backdrop-blur-2xl">
            <Link href='/'>
                <h1 className="flex ml-6 font-medium text-white text-5xl tracking-wider xs:max-sm:text-3xl ">Look up! </h1>
            </Link>
            <ul className="flex flex-row flex-end gap-4 text-white mt-10 mr-10 hover:text-dirty-white">
                <Link href='/'><li className=" text-white hover:text-dirty-white">Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href="/blog"><li>Blog</li></Link>
                {isUserAuthenticated && <li>{userDisplayName}</li>}
                <li><SpotifyLoginButton></SpotifyLoginButton></li>
            </ul>  
      </div>
        </>
    )
}