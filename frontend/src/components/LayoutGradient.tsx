import {ReactNode} from "react";
import styles from "@/styles/general.module.scss"

export default function LayoutGradient({ children }: {children: ReactNode}) {
    return (<main className={`flex flex-col min-h-[100vh] ${styles.gradientBackground}`}>{children}</main>    )
}