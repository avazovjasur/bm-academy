import React, { useState } from "react"
import About from "@/components/About/About"
import Footer from "@/components/Footer/Footer"
import Direction from "@/components/Direction/Direction"
import Header from "@/components/Header/Header"
import Intro from "@/components/Intro/Intro"
import Offer from "@/components/Offer/Offer"
import Propose from "@/components/Propose/Propose"
import Text from "@/components/Text/Text"


const Home = () => {
  const [popup, setPopup] = useState(false)

  return (
    <>
      <Header />
      <Intro />
      <About />
      <Offer />
      {/* <Direction /> */}
      <Propose />
      <Text />
      <Footer />
    </>
  )
}

export default Home