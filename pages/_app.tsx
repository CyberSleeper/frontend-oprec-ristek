import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>MedSOS</title>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </>
  )
}
