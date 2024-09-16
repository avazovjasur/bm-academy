import About from "@/components/About/About"
import Footer from "@/components/Footer/Footer"
import Direction from "@/components/Direction/Direction"
import Header from "@/components/Header/Header"
import Intro from "@/components/Intro/Intro"
import Offer from "@/components/Offer/Offer"
import Type from "@/components/Type/Type"
import Propose from "@/components/Propose/Propose"


const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Offer />
      {/* <Type /> */}
      {/* <Direction /> */}
      <Propose />
      <Footer />
    </>
  )
}

export default Home