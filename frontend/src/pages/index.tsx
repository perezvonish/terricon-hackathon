import { Inter } from 'next/font/google'
import General from "@/components/general/General";
import LayoutWhite from "@/components/LayoutWhite";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          <LayoutWhite>
              <General />
          </LayoutWhite>
      </>
  )
}
