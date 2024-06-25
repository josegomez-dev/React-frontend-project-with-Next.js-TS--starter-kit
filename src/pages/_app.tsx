import './../app/globals.css'

import { GlobalProvider } from '@/context/GlobalContext'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </GlobalProvider>
  )
}

export default MyApp
