import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "@/components/navigation/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Navigation key="navigation-bar"/>
        <Component {...pageProps} />
      </>
  )
}