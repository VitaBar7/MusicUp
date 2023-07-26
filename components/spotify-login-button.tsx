import React, {useContext} from "react";
import { AuthContext } from "@component/context"

export const SpotifyLoginButton:React.FC = () => {
    const{ logout, isUserAuthenticated } = useContext(AuthContext)

    const CLIENT_ID = "0e7d7413b7494383814e036c1d527467"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const scope = "streaming user-read-email user-read-private"

    const login = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scope}`

    return (
        <div className="App">
                {!isUserAuthenticated ?
                    <a className="bg-charbon rounded-full py-2 px-3 text-xs tracking-wider"
                        href={login}>
                            Login with Spotify</a>
                    : <button className="bg-charbon rounded-full py-2 px-3 text-xs tracking-wider hover:shadow-lg" onClick={logout}>Logout</button>}
        </div>
    );
}



export default SpotifyLoginButton