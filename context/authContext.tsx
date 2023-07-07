import {createContext, useState, useEffect, PropsWithChildren} from 'react'

type AuthContextType = {
    userAccessToken: string
    isUserAuthenticated: boolean
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
    userAccessToken: "",
    isUserAuthenticated: false,
    logout: () => {
    }
})

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [userAccessToken, setUserAccessToken] = useState<string>("")

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

    return (
        <AuthContext.Provider value={{
            userAccessToken,
            isUserAuthenticated: userAccessToken !== "",
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
