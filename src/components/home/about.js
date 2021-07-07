import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import AboutData from "../../../content/about.yaml"
import Specifications from "../../../content/specifications.yaml"
import LinesToParagraphs from "../../utils/linesToParagraphs"
import Section from "../common/section"

const About = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/about_bg.png" }) {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [384, 513]
              width: 861
              sizes: "43vw"
              quality: 50
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )

  return (
    <Section type="dark" heading={AboutData.heading}>
      <div className="c-about">
        <GatsbyImage
          image={file.childImageSharp.gatsbyImageData}
          alt=""
          className="c-about__image"
        />
        <div className="c-about__content">
          {LinesToParagraphs(AboutData.text)}

          <h5 className="c-about__requirements-heading">
            {Specifications.heading}
          </h5>
          <p className="c-about__requirements-text">{Specifications.text}</p>
        </div>
      </div>
    </Section>
  )
}

export default About
