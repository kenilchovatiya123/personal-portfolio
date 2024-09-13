import React from 'react'
import './About.css'
import about_img from '../../assets/user.png'

const About = () => {

    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={about_img} alt="" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <div className="tab-para">
                            <p>Hi,  I'm Kenil Chovatiya, as a fresher with strong foundation in HTML, CSS, and JavaScript, I specialize in creating responsive, user-friendly web interfaces that deliver an exceptional user experience. I enjoy transforming ideas into reality through clean, efficient code and modern design principles.</p>

                            <p>I am constantly learning and staying updated with the latest trends and technologies in front-end development to deliver cutting-edge solutions. Whether working on a team or independently, I am committed to producing high-quality, maintainable code that meets project goals and exceeds expectations.</p>
                        </div>

                        <div className="skills-content">

                            <div className="progress">
                                <span className="skill"><span>HTML</span> <i className="val">85%</i></span>
                                <div className="progress-bar-wrap">
                                    <div style={{ width: "85%" }} className="progress-bar" role="progressbar"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>CSS</span> <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div style={{ width: "75%" }} className="progress-bar" role="progressbar"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>JavaScript</span> <i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    <div style={{ width: "65%" }} className="progress-bar" role="progressbar"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>React js</span> <i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    <div style={{ width: "60%" }} className="progress-bar" role="progressbar"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>Tailwind</span> <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div style={{ width: "60%" }} className="progress-bar" role="progressbar"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About