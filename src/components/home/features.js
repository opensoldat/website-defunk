import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Section from "../common/section"
import LinesToParagraphs from "../../utils/linesToParagraphs"

const Features = () => {
  const {
    file: {
      childContentYaml: { heading, items },
    },
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "features.yaml" }) {
        childContentYaml {
          heading
          items {
            description
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 306
                  sizes: "(min-width: 1336px) 23vw, 306px"
                  quality: 75
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section heading={heading}>
      <ul className="c-features">
        {items.map(({ description, title, image }) => {
          return (
            <li
              key={image.childImageSharp.gatsbyImageData.src}
              className="c-features__item"
            >
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                className="c-features__image"
                alt={image.childImageSharp.gatsbyImageData.originalName}
              />
              <div className="c-features__content">
                <h3 className="c-features__heading">{title}</h3>
                <div className="c-features__text">
                  {LinesToParagraphs(description)}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default Features
