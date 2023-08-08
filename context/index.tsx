import { createContext, useState, useEffect, PropsWithChildren } from 'react'
import { login } from "@component/api/login"

type AuthContextType = {
  userAccessToken: string
}

export const AuthContext = createContext<AuthContextType>({
  userAccessToken: ""
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userAccessToken, setUserAccessToken] = useState<string>("")
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState<boolean>(false)

  useEffect(() => {
    if (userAccessToken === "" && !isLoadingUserInfo) {
      setIsLoadingUserInfo(true)
      login()
      .then(response => {
        setUserAccessToken(response.access_token)
        setIsLoadingUserInfo(false)})
    }
   //console.log(`token is: ${userAccessToken}`)
  }, [userAccessToken])

  return (
    <AuthContext.Provider value={{userAccessToken}}>
      {children}
    </AuthContext.Provider>
  )
}
