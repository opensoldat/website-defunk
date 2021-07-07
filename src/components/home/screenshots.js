import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Section from "../common/section"

const Screenshots = () => {
  const {
    file: {
      childContentYaml: { heading, images },
    },
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "screenshots.yaml" }) {
        childContentYaml {
          heading
          images {
            thumb {
              base
              childImageSharp {
                gatsbyImageData(
                  sizes: "(min-width: 48em) 9.6vw, (min-width: 64em) 11.5vw, (min-width: 85.375em) 10.4vw, (min-width: 120em) 8.8vw, 29.3vw"
                  width: 167
                  quality: 75
                  layout: CONSTRAINED
                )
              }
            }
            full {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section heading={heading}>
      <ul className="c-screenshots">
        {images.map((images, index) => (
          <li
            className="c-screenshots__item"
            key={images.thumb.childImageSharp.gatsbyImageData.src}
          >
            <a
              href={images.full.childImageSharp.original.src}
              className="c-screenshots__link"
            >
              <GatsbyImage
                image={images.thumb.childImageSharp.gatsbyImageData}
                className="c-screenshots__thumb"
                alt={images.thumb.base.split(".")[0]}
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Screenshots
