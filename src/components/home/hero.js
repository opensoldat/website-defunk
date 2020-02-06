import React from "react"
import Video from '../../assets/video/Soldat.mp4'
import VideoPoster from '../../assets/images/home_hero/video_poster.jpg'
import Img from "gatsby-image"
import {StaticQuery, graphql} from "gatsby"
import Icon from '../common/icon'
import Data from '../../../content/hero.yaml'

export default () => (
    <StaticQuery query={graphql`
          query{
      file(relativePath: {eq: "images/home_hero/rambo.png"}) {
       childImageSharp {
          fluid(maxWidth: 1080, quality:70, sizes: "72vw") {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }

    `} render={({file: { childImageSharp: {fluid: image}}}) => (
        <section className="c-home-hero">
            <div className="c-home-hero__content">
                <h1 className="c-home-hero__heading" dangerouslySetInnerHTML={{ __html: Data.heading }}/>
                <p className="c-home-hero__text" dangerouslySetInnerHTML={{ __html: Data.description }}/>
                <div className="c-home-hero__buttons">
                    <a href="/" className="c-btn c-btn--secondary c-btn--pulse">{Data.download_text}</a>
                    <a href="https://store.steampowered.com/app/638490/Soldat/" className="c-btn c-btn--steam">
                        <div className="c-btn__inner">
                            <div className="c-btn__text">{Data.download_steam_text} <span
                                className="u-hidden-visually">Steam</span></div>
                            <Icon name="steam-btn" className="c-btn__image"/>
                        </div>
                    </a>
                </div>
            </div>
            <div className="c-home-hero__bg">
                <Img fluid={image} alt="" className="c-home-hero__rambo" loading="eager" fadeIn="false"/>
                <div className="c-home-hero__bg-sec"/>
            </div>
            <video className="c-home-hero__video js-hero-video" poster={VideoPoster} autoPlay
                   muted loop>
                <source src={Video} type="video/mp4"/>
            </video>
            <a href="/" className="c-home-hero__trailer-link">
                <Icon name="arrow-circle-down" inline="true" className="c-home-hero__trailer-link-icon"/>
                {Data.watch_trailer_text}
            </a>
        </section>
    )}/>
)
