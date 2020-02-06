import React from 'react'
import Section from '../common/section'
import {useStaticQuery, graphql} from "gatsby"
import Img from 'gatsby-image'
import LinesToParagraphs from '../../utils/linesToParagraphs'

export default () => {

    const {file: {childContentYaml: {heading, items}}} = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "features.yaml"}) {
                childContentYaml {
                    heading
                    items {
                        description
                        title
                        image {
                            childImageSharp {
                                fluid(maxWidth: 306, sizes:"(min-width: 1336px) 23vw, 306px", quality:75) {
                                    ...GatsbyImageSharpFluid
                                    originalName
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
            <ul className="c-features">

                {items.map(({description,title,image}) => {

                    return (
                        <li key={image.childImageSharp.fluid.src} className="c-features__item">
                            <Img className="c-features__image"
                                 alt={image.childImageSharp.fluid.originalName}
                                 fluid={image.childImageSharp.fluid}/>
                            <div className="c-features__content">
                                <h3 className="c-features__heading">{title}</h3>
                                <div className="c-features__text">{LinesToParagraphs(description)}</div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </Section>
    );

}