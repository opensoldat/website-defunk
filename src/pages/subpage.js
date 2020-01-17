import React from "react"
import Layout from "../components/layout"
import SEO from "../components/common/seo"
//import Section from "../components/common/section"

const SubPage = () => (
    <Layout>
        <SEO title="Subpage"/>
        <section className="o-section">
            <div className="o-wrapper">
                <h1 className="o-section__heading">Subpage</h1>
                <p>Lorem ipsum...</p>
            </div>
        </section>
    </Layout>
);

export default SubPage
