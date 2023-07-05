import React from "react";


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=0e7d7413b7494383814e036c1d527467&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function LoginWithSpotify() {

    return (
        <div className="flex justify-center items-center" style={{minHeight: "100vh"}}>
            <a className="bg-dark-grey text-sm  text-white rounded-full mt-10 mb-10 py-2 px-3 self-center" href={AUTH_URL}>
                Log in with Spotify
            </a>
        </div>
    )
}