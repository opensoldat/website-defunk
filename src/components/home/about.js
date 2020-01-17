import React from 'react'
import About from '../../../content/about.yaml'
import Specifications from '../../../content/specifications.yaml'
import LinesToParagraphs from '../../utils/linesToParagraphs'
import Section from '../common/section'

import Img from "gatsby-image"
import {StaticQuery, graphql} from "gatsby"

export default () => (
    <StaticQuery query={graphql`
          query{
      file(relativePath: {eq: "images/about_bg.png"}) {
       childImageSharp {
          fluid(srcSetBreakpoints: [384, 513], maxWidth: 861, quality:100, sizes: "43vw") {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

    `} render={data => (
        <Section type="dark" heading={About.heading}>
                <div className="c-about">
                    <Img fluid={data.file.childImageSharp.fluid} alt="" className="c-about__image"/>
                    <div className="c-about__content">
                            {LinesToParagraphs(About.text)}

                            <h5 className="c-about__requirements-heading">{Specifications.heading}</h5>
                            <p className="c-about__requirements-text">{Specifications.text}</p>
                    </div>
                </div>
        </Section>
    )}/>
);
