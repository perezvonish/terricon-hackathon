import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Navigation />
          <main className="flex flex-col min-h-[100vh]">
              <Component {...pageProps} />
          </main>
          <Footer />
      </>
  )
}