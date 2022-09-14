import React from 'react'
import CustomizedTimeline from './AboutTimeLine'
import './About.css'
const About = ({ id }) => {
    return (
        <div id={id} className="About-Container">
            <div className="about-title-container">
                <h1 className="about-title">How Does It Work?</h1>
            </div>
            <CustomizedTimeline />
            <div className="about-end"></div>
        </div >

    )
}

export default About

export const aboutObj = {
    id: 'about'

}