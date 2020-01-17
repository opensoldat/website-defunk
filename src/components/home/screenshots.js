import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from '../common/section'

const Screenshots = () => {

    const {file: {childContentYaml: {heading, images}}} = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "screenshots.yaml"}) {
                childContentYaml {
                    heading
                    images {
                        thumb {
                            base
                            childImageSharp {
                                fluid(sizes: "(min-width: 48em) 9.6vw, (min-width: 64em) 11.5vw, (min-width: 85.375em) 10.4vw, (min-width: 120em) 8.8vw, 29.3vw", maxWidth: 167, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
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
    `);

    return (
        <Section heading={heading}>
                <ul className="c-screenshots">
                    {images.map((images, index) => (
                        <li className="c-screenshots__item" key={images.thumb.childImageSharp.fluid.src}>
                            <a href={images.full.childImageSharp.original.src} className="c-screenshots__link"><Img fluid={images.thumb.childImageSharp.fluid}
                                                                             className="c-screenshots__thumb"
                                                                             alt={images.thumb.base.split(".")[0]}/></a>
                        </li>
                    ))}
                </ul>
        </Section>
    )
};

export default Screenshots;