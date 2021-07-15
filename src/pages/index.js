import React from "react"

import Layout from "../components/layout"
import Seo from "../components/common/seo"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import Screenshots from "../components/home/screenshots"
import Trailer from "../components/home/trailer"
import Features from "../components/home/features"
import Cta from "../components/home/cta"

const IndexPage = () => (
  <Layout hasParallax={true} className={"home"}>
    <Seo title="Home" />
    <Hero />
    <About />
    <Screenshots />
    <Trailer />
    <Features />
    <Cta />
  </Layout>
)

export default IndexPage
