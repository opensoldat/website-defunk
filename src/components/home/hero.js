import React from "react"
import VideoWebM from "../../assets/video/Soldat.webm"
import VideoMP4 from "../../assets/video/Soldat.mp4"
import VideoPoster from "../../assets/images/home_hero/video_poster.jpg"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import CommonIcon from "../common/CommonIcon"
import Data from "../../../content/hero.yaml"

const Hero = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/home_hero/rambo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 70
              sizes: "72vw"
              placeholder: NONE
              layout: FULL_WIDTH
            )
          }
        }
      }
    `
  )

  return (
    <section className="c-home-hero">
      <div className="c-home-hero__content">
        <h1
          className="c-home-hero__heading"
          dangerouslySetInnerHTML={{ __html: Data.heading }}
        />
        <p
          className="c-home-hero__text"
          dangerouslySetInnerHTML={{ __html: Data.description }}
        />
        <div className="c-home-hero__buttons">
          <a href="/" className="c-btn c-btn--secondary c-btn--pulse">
            {Data.download_text}
          </a>
          <a
            href="https://store.steampowered.com/app/638490/Soldat/"
            className="c-btn c-btn--steam"
          >
            <div className="c-btn__inner">
              <div className="c-btn__text">
                {Data.download_steam_text}{" "}
                <span className="u-hidden-visually">Steam</span>
              </div>
              <CommonIcon name="steam-btn" className="c-btn__image" />
            </div>
          </a>
        </div>
      </div>
      <div className="c-home-hero__bg">
        <GatsbyImage
          image={file.childImageSharp.gatsbyImageData}
          alt=""
          className="c-home-hero__rambo"
        />
        <div className="c-home-hero__bg-sec" />
      </div>
      <video
        className="c-home-hero__video js-hero-video"
        poster={VideoPoster}
        autoPlay
        muted
        loop
      >
        <source src={VideoWebM} type="video/webm" />
        <source src={VideoMP4} type="video/mp4" />
      </video>
      <a href="/" className="c-home-hero__trailer-link">
        <CommonIcon
          name="arrow-circle-down"
          inline="true"
          className="c-home-hero__trailer-link-icon"
        />
        {Data.watch_trailer_text}
      </a>
    </section>
  )
}

export default Hero
