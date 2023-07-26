import { useContext, useState } from "react"
import { AuthContext } from '@component/context'
import {WebPlayBackContext} from "@component/context/webPlayBackContext";



export const AlbumInfo = () => {
    const{ userAccessToken } = useContext(AuthContext)
    const { deviceId } = useContext(WebPlayBackContext)
    const [albumInfo, setAlbumInfo] = useState(undefined)



}