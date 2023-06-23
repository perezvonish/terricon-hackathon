import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}