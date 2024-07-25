import clsx from "clsx"
import { Satisfy, Lato } from "next/font/google"
// import ModalContainer from "@/components/modals/view"
// import DrawerContainer from "@/components/drawers/view"
// import GalleryCarouselView from "@/components/gallery/view"
import "@/styles/globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato"
})

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy"
})

export const metadata = {
  title: "Business for Sale Marcket place in Austraia",
  description: "Let's enjoy business",
  icons: ["/images/logo.svg"]
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full font-lato antialiased",
        satisfy.variable,
        lato.variable
      )}
    >
      <head />
      <body className="flex min-h-full flex-col">
        {children}
        {/* <ModalContainer />
        <DrawerContainer />
        <GalleryCarouselView /> */}
      </body>
    </html>
  )
}
