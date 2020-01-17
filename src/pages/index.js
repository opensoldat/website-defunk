import React from "react"
import Layout from "../components/layout"
import SEO from "../components/common/seo"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import Screenshots from "../components/home/screenshots"
import Trailer from "../components/home/trailer"
import Features from "../components/home/features"
import CTA from "../components/home/cta"

const IndexPage = () => (
    <Layout hasParallax={true} className={"home"}>
      <SEO title="Home" />
      <Hero/>
      <About/>
      <Screenshots/>
      <Trailer/>
      <Features/>
      <CTA/>
    </Layout>
);

export default IndexPage
