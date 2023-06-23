import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import {ReactNode} from "react";

export default function Layout({ children }: {children: ReactNode}) {
    return (
        <>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}