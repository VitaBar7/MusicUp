import { AuthProvider } from '@component/context'
import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import SupabaseProvider from '@component/providers/SupabaseProvider'




export default function App({ Component, pageProps }: AppProps) {
 
  return (
  
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider> 
    

  )
}
