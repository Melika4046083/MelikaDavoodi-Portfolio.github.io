import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/about_profile.png'

const About = () => {
    return(
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                  <img src={profile_img} alt="" />  
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a UX designer and React developer, creating intuitive and high-performance digital experiences. I blend design principles with clean, scalable code to build seamless and user-friendly interfaces.</p>
                        <p>With expertise in both UX and front-end development, I bridge the gap between aesthetics and functionality, ensuring visually compelling and technically robust products.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Next Js</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>UX Design</p><hr style={{width:"100%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>7+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>7+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About