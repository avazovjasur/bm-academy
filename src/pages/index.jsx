import About from "@/components/About/About"
import Direction from "@/components/Direction/Direction"
import Header from "@/components/Header/Header"
import Intro from "@/components/Intro/Intro"
import Offer from "@/components/Offer/Offer"


const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Offer />
      <Direction />
    </>
  )
}

export default Home