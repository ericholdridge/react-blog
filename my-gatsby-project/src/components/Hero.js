import React from "react"
import FeaturedPosts from "./FeaturedPosts"
import Header from './Header'
import HeaderHero from './HeaderHero'
import Image from "./image"

const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <HeaderHero />
      <Image />
      <FeaturedPosts />
    </section>
  )
}

export default Hero;