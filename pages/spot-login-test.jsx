import { useEffect, useState } from 'react'
import LoginWithSpotify from '@component/utils/login'
import Dashboard from '../components/dashboard'


function Player() {
    const[code, setCode] = useState({})
    
    /* useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code')
        setCode(code)
    },[code]) */

    return (
        /* code ? <Dashboard code={code} /> : */ <LoginWithSpotify/> 
    )
}

export default Player