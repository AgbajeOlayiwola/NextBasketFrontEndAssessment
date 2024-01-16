"use client"
import { useEffect, useState } from "react"
import BottomNavbar from "./bottom-navbar"
import Footer from "./footer"
import TopNavbar from "./top-navbar"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [width])
  return (
    <>
      {width > 900 ? <TopNavbar /> : null}
      <BottomNavbar /> {children}
      <Footer />
    </>
  )
}

export default MainLayout
