import React from 'react'
import Section from '../common/section'
import Data from '../../../content/trailer.yaml'

const Trailer = () => (
    <Section type="trailer" heading={Data.heading}>
            <div className="o-video">
                <iframe src={"https://www.youtube.com/embed/"+Data.youtube_video_id} title="Soldat Trailer" frameBorder="0" allowFullScreen />
            </div>
    </Section>
);

export default Trailer