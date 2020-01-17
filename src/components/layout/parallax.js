import React, {useRef, useEffect, useCallback} from 'react'
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Parallax = ({children}) => {

    const {allFile: {edges: layers}} = useStaticQuery(graphql`
        query{
            allFile(filter: {relativeDirectory: {eq: "images/parallax"}}, sort: {order: ASC, fields: base}) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid(srcSetBreakpoints: [1024, 1366, 1680, 1920, 2560], maxWidth: 3840, sizes: "(max-width: 1024px) 1024px, 100vw") {
                                ...GatsbyImageSharpFluid_noBase64
                            }
                        }
                    }
                }
            }
        }
    `);

    const speed = layers.map(({node: {base: filename}}) => {
        return parseInt(filename.split(".")[0].split("_")[2]);
    });
    let parallaxContainer = useRef(null);


    const updatePositions = useCallback(() => {

        const rect = parallaxContainer.current.getBoundingClientRect();
        let top = rect.top - window.innerHeight;
        const h = parallaxContainer.current.offsetHeight;
        const domLayers = parallaxContainer.current.children;

        if (top < 0) {

            let yPos = null;
            for (let i = 0; i < domLayers.length; i += 1) {
                if(speed[i] === 100) continue;

                yPos = Math.round(-(((top + h) * (100 - speed[i])) / 100));
                domLayers[i].setAttribute('style', `transform: translate3d(0, ${yPos}px, 0)`);
            }
        }
        return true;
    }, [speed, parallaxContainer]);

    const onWindowResize = useCallback(() => {
        updatePositions()
    }, [updatePositions]);

    const onWindowLoad = useCallback(() => {
        updatePositions()
    }, [updatePositions]);

    const onScroll = useCallback(() => {
        window.requestAnimationFrame(updatePositions);
    }, [updatePositions]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll, false);
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('load', onWindowLoad, false);
        return () => {
            window.removeEventListener('scroll', onScroll, false);
            window.removeEventListener('resize', onWindowResize, false);
            window.removeEventListener('load', onWindowLoad, false);
        }
    }, [onScroll, onWindowResize, onWindowLoad]);

    return (
        <main className="c-parallax">
            {children}
            <div className="c-parallax__layers" ref={parallaxContainer}>
                { layers.map(({node}, index) => (
                    <div key={"parallax_" + node.base} className="c-parallax__layer">
                        <Img fluid={node.childImageSharp.fluid} alt=""/>
                    </div>
                ))}
            </div>
        </main>)
};

Parallax.propTypes = {
    children: PropTypes.node.isRequired
};

export default Parallax