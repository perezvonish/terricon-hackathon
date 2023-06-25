import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import {ReactNode} from "react";


export default function LayoutWhite({ children }: {children: ReactNode}) {
    return (
        <main className="flex flex-col min-h-[100vh]">{children}</main>
    )
}