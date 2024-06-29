import React from 'react'
import './Portfolio.css'
import portfolio_img1 from '../../assets/my-portfolio-image.jpg'
import portfolio_img2 from '../../assets/netflix-landing-page-image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={portfolio_img1} alt="" />
                        <div className="work-info">
                            <a href={portfolio_img1} target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                            <h3>Personal Portfolio</h3>
                        </div>
                    </div>
                    <div className="work">
                        <img src={portfolio_img2} alt="" />
                        <div className="work-info">
                            <a href={portfolio_img2} target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                            <h3>Netflix Clone Website</h3>
                        </div>
                    </div>
                    <div className="work">
                        <img src="" alt="todo application" />
                        <div className="work-info">
                            <a href="#" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                            <h3>ToDo App</h3>
                        </div>
                    </div>
                </div>
                {/* <a href="#" className="btn">See more</a> */}
            </div>
        </div>
    )
}

export default Portfolio