import Link from 'next/link'
import SpotifyLoginButton from "@component/components/spotify-login-button";
import React, {useContext, useEffect, useState} from "react";
import {getUserInfo} from "@component/api/user-profile";
import {AuthContext} from "@component/context";


export default function Navbar() {
    const{ userAccessToken, isUserAuthenticated } = useContext(AuthContext)
    const [ userDisplayName, setUserDisplayName] = useState<string>("")

    useEffect(() => {
        if(isUserAuthenticated) {
            getUserInfo(userAccessToken)
                .then(response => setUserDisplayName(response.display_name))
        }
    }, [isUserAuthenticated])

    return (
        <>
        <div className="z-10 fixed whitespace-pre-wrap flex left-0 top-0 w-full items-center justify-between border-b border-gray-300 from-zinc-200 py-3 xs:max-sm:py-1 backdrop-blur-2xl">
            <Link href='/'>
                <h1 className="flex ml-6 font-medium text-white text-5xl tracking-wider xs:max-sm:text-3xl xs:max-sm:leading-6 ">Look up! </h1>
            </Link>
            <div className="flex flex-col">
                <ul className="flex order-last flex-row flex-end gap-6 text-white mt-4 mr-10 xs:max-sm:mr-4 xs:max-sm:gap-4 xs:max-sm:text-sm hover:text-dirty-white">
                    <Link href='/'><li className=" text-white hover:text-dirty-white">Home</li></Link>
                    <Link href='/about'><li>About</li></Link>
                    <Link href="/blog"><li>Blog</li></Link>
                </ul> 
                <ul className="flex flex-row justify-around xs:max-sm:mr-3"> 
                    {isUserAuthenticated && <li className="font-thin mt-1"> <span className="font-light">{userDisplayName}</span></li>}
                    <li className="flex-end"><SpotifyLoginButton></SpotifyLoginButton></li>
                </ul>

            </div>
      </div>
        </>
    )
}