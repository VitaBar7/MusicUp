
import { getUserInfo } from '@component/api/user-profile'
import {createContext, useState, useEffect, PropsWithChildren} from 'react'

type AuthContextType = {
    userAccessToken: string
    isUserAuthenticated: boolean
    logout: () => void
    userId: string
    
}

export const AuthContext = createContext<AuthContextType>({
    userAccessToken: "",
    isUserAuthenticated: false,
    logout: () => {
    },
    userId:""
    
})

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [userAccessToken, setUserAccessToken] = useState<string>("")
    const [userId, setUserId] = useState<string>("")
   

    const logout = () => {
        setUserAccessToken("")
        window.localStorage.removeItem("token")
    }

    useEffect(() => {
        if (userAccessToken === "") {
            const hash = window.location.hash
            let token = window.localStorage.getItem("token") ?? ""
            if (!token && hash) {
                token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1] ?? ""

                window.location.hash = ""
                window.localStorage.setItem("token", token)
            }
            console.log(token)
            setUserAccessToken(token)
        }
    }, [])

    useEffect(() => {
        if(userAccessToken !== "") {
            getUserInfo(userAccessToken)
            .then(response => {
                if(response !== null) {
                    setUserId(response.id)
                }
            })
        }
    }, [userAccessToken])
    

    return (
        <AuthContext.Provider value={{
            userAccessToken,
            isUserAuthenticated: userAccessToken !== "",
            logout,
            userId
        }}>
            {children}
        </AuthContext.Provider>
    )
}
