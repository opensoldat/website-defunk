import React from "react"

import Layout from "../components/layout"
import SEO from "../components/common/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found"/>
        <section className="o-section">
            <div className="o-wrapper">
                <h1 className="o-section__heading">Not Found</h1>
                <p class="u-text-center">You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
        </section>
    </Layout>
)

export default NotFoundPage
