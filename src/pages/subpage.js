import React from "react"

import Layout from "../components/layout"
import Seo from "../components/common/seo"
import Section from "../components/common/section"

const SubPage = () => (
  <Layout>
    <Seo title="Subpage" />
    <Section className="o-section">
      <div className="o-wrapper">
        <h1 className="o-section__heading">Subpage</h1>
        <p>Lorem ipsum...</p>
      </div>
    </Section>
  </Layout>
)

export default SubPage
