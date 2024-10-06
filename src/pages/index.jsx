import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import About from "@/components/About/About"
import Footer from "@/components/Footer/Footer"
import Direction from "@/components/Direction/Direction"
import Header from "@/components/Header/Header"
import Intro from "@/components/Intro/Intro"
import Offer from "@/components/Offer/Offer"
import Propose from "@/components/Propose/Propose"
import Text from "@/components/Text/Text"
import Popup from "@/components/Popup/Popup"


const Home = () => {
  const router = useRouter()
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    router.push(router.pathname, router.asPath, { locale: 'ru' });
  }, [])

  return (
    <>
      <Header popup={popup} setPopup={setPopup}/>
      <Intro popup={popup} setPopup={setPopup}/>
      <About popup={popup} setPopup={setPopup}/>
      <Direction popup={popup} setPopup={setPopup}/>
      <Offer popup={popup} setPopup={setPopup}/>
      <Propose popup={popup} setPopup={setPopup}/>
      <Text popup={popup} setPopup={setPopup}/>
      <Popup popup={popup} setPopup={setPopup}/>
      <Footer popup={popup} setPopup={setPopup}/>
    </>
  )
}

export default Home
