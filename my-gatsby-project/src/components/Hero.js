import React from "react"
import FeaturedPosts from "./FeaturedPosts"
import Header from './Header'
import HeaderHero from './HeaderHero'
import HeroImage from "./HeroImage"

const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <HeaderHero />
      <HeroImage />
      <FeaturedPosts />
    </section>
  )
}

export default Hero;