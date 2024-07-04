import React from 'react'
import './Portfolio.css'
import portfolio_img1 from '../../assets/my-portfolio-image.jpg'
import portfolio_img2 from '../../assets/netflix-landing-page-image.jpg'
import portfolio_img3 from '../../assets/my-todo-app-image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
            </div>
            <div className="portfolio-content container">
                <div className="work-row">
                    <img src={portfolio_img1} alt="" />
                    <div className="main-row">
                        <div className="row-text">
                            <h5>Personal Portfolio</h5>
                        </div>
                        <div className="row-icon">
                            <a href={portfolio_img1} target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                        </div>
                    </div>
                    <h4>personal website using REACT.JS</h4>
                </div>
                <div className="work-row">
                    <img src={portfolio_img2} alt="" />
                    <div className="main-row">
                        <div className="row-text">
                            <h5>Netflix Clone</h5>
                        </div>
                        <div className="row-icon">
                            <a href={portfolio_img2} target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                        </div>
                    </div>
                    <h4>netflix landing page clone</h4>
                </div>
                <div className="work-row">
                    <img src={portfolio_img3} alt="" />
                    <div className="main-row">
                        <div className="row-text">
                            <h5>To-Do app</h5>
                        </div>
                        <div className="row-icon">
                            <a href={portfolio_img3} target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                        </div>
                    </div>
                    <h4>to-do list application using REACT.JS & TAILWINDCSS</h4>
                </div>
            </div>
            {/* <a href="#" className="btn">See more</a> */}
        </div>
    )
}

export default Portfolio