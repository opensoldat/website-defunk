import React from "react"
import PropTypes from "prop-types"

import Header from "./layout/header"
import Footer from "./layout/footer"
import Parallax from "./layout/parallax"

const Layout = ({ children, className, hasParallax }) => (
  <div className={`c-layout ${className}`}>
    <Header />
    {hasParallax ? <Parallax>{children}</Parallax> : <main>{children}</main>}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasParallax: PropTypes.bool,
  className: PropTypes.string,
}

Layout.defaultProps = {
  hasParallax: false,
  className: "",
}

export default Layout
