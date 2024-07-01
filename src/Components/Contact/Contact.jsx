import React, { useState } from 'react'
import './Contact.css'
import my_resume from '../../assets/Resume/Kenilresume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f6b96c48-f4ce-49bc-99b9-d5a18766c1ab");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Seccess!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };




    return (
        <div className='contact' id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Get in Touch</h1>
                        <p><FontAwesomeIcon icon={faPaperPlane} className='contact_icon' />kenilchovatiya126@gmail.com</p>
                        <p><FontAwesomeIcon icon={faSquarePhone} className='contact_icon' />+91 8866302556</p>
                        <div className="social-icons">
                            <a href="https://github.com/kenilchovatiya123" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://wa.me/918866302556" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div>
                            <a href={my_resume} download="Resume.pdf" target='_blank'>
                                <input type="button" className='btn btn2' value="DOWNLOAD CV" />
                            </a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form onSubmit={onSubmit}>
                            <input type="text" name='name' placeholder='Enter Your Name' required />
                            <input type="email" name="email" placeholder='Enter Your Email' required />
                            <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                            <button type="submit" className="btn btn2">Submit now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact