import React from 'react'
import CTA from '../../../content/cta.yaml'
import nl2br from 'react-nl2br'

export default () => (
    <section className="c-cta">
        <div className="o-wrapper">
            <h2 className="c-cta__heading wow fadeInUp" data-wow-delay="1s">{nl2br(CTA.text)}</h2>
            <a href="/" className="c-btn c-btn--primary c-btn--small wow zoomIn" data-wow-delay="0.5s">{CTA.button_text}</a>
        </div>
    </section>
);