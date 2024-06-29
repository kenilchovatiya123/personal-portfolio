import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faCode, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services" id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <FontAwesomeIcon icon={faPenToSquare} className='services_icon' />
                        <h2>Web Design</h2>
                        <p>Creating visually appealing and user-friendly web designs is at the core of my skill set. I specialize in crafting designs that not only look stunning but also provide an intuitive user experience. My design process involves understanding the client's brand and vision, translating it into aesthetically pleasing and functional web interfaces.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCode} className='services_icon' />
                        <h2>Web Development</h2>
                        <p>With a strong foundation in HTML, CSS, and JavaScript, I bring web designs to life through efficient and clean coding practices. I develop responsive, fast-loading, and interactive websites that work seamlessly across all devices and browsers. My development approach focuses on writing modular and maintainable code, ensuring that the websites are scalable and easy to update.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLaptopCode} className='services_icon' />
                        <h2>Responsive Design</h2>
                        <p>I specialize in creating websites that adapt to any screen size, providing an optimal viewing experience on desktops, tablets, and smartphones. By using modern CSS techniques and frameworks, I ensure that the layout, images, and functionalities of the website adjust smoothly to different devices. This not only enhances the user experience but also improves SEO rankings and accessibility.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services