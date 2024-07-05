import { useState } from "react"
import HeroImage from "./HeroImage"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
import Navbar from "./navbar/Navbar"
import Sidebar from "./navbar/Sidebar"

const Hero = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <main className="relative h-[90vh] w-[100vw] bg-gradient-to-r from-[#1a2025] to-[#272c36] max-2xl:min-h-[100vh] max-md:mb-40">
      <section className="h-full w-full max-lg:flex max-lg:items-center max-lg:justify-center">
        <div className="container h-full w-full">
          <Navbar setOpenMenu={setOpenMenu} />
          {/* HERO */}
          <div className="grid h-full grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3">
            <LeftSide />
            <HeroImage />
            <RightSide />
            <Sidebar openMenu={openMenu} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
