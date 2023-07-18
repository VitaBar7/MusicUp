import { AuthProvider } from '@component/context'
import '@component/styles/globals.css'
import type { AppProps } from 'next/app'

import {WebPlayBackProvider} from "@component/context/webPlayBackContext";




export default function App({ Component, pageProps }: AppProps) {
 
  return (
    
      <AuthProvider>
          <WebPlayBackProvider>
            {/* <SupabaseProvider> */ }
              <Component {...pageProps} />
            { /* </SupabaseProvider> */}
          </WebPlayBackProvider>
      </AuthProvider> 
    

  )
}
