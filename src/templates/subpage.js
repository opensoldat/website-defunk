import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/common/seo"

const SubPage = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <section className="o-section">
        <div className="o-wrapper">
          <h1 className="o-section__heading">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default SubPage
