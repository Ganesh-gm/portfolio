import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ReactTyped } from 'react-typed';

// import facebook from '../../assets/facebook.png'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_tpnpcbs',
                'template_bzao6jd',
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                'EuycLPonzNnAR-Nkh'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.log(error.text);
                    setStatus('Failed to send message. Please try again.');
                }
            );
    };
    return (
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <div className="contacts">
                <div className="column_left">
                    <div className="text">Get in Touch</div>
                    <p>
                        I am ready to work. If you need more information, just contact me
                        through any of my credentials, and I will try to reply immediately.
                    </p>
                    <div className="info">
                        <div className="head">Phone No</div>
                        <div className="sub-title">+919629594185</div>
                    </div>
                    <div className="info">
                        <div className="head">Email</div>
                        <div className="sub-title">ganeshgm254@gmail.com</div>
                    </div>
                </div>
                <div className="column_right">
                    <div className="text">Connect with</div>
                    <p>
                        Here I have given some of my social accounts. I would love to have
                        new friends and colleagues. If you have time, feel free to contact me.
                    </p>
                    <div className="socials">

                        <a href="https://github.com/Ganesh-gm" target="_blank" rel="noopener noreferrer">
                            <span className="ico-circle">
                            <FaGithub size={40} style={{ fill: 'yellow' }} />
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/ganesha-moorthy-34bb66213" target="_blank" rel="noopener noreferrer">
                            <span className="ico-circle">
                                <FaLinkedinIn size={40} style={{ fill: 'yellow' }} /> 
                            </span>
                        </a>

                    </div>
                </div>
            </div>
            <div className="formInformation">
                <span className="contactDesc">
                        <ReactTyped
                            strings={["Please fill out the form below to discuss any work opportunities"]}
                            typeSpeed={40}
                            backSpeed={50}
                            backDelay={1000}
                            typingDelay={500}
                            loop
                            className="dynamicText"  // Add a class for styling
                        />
                    </span>
                <form className="contactForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </section>
    );
};
export default Contact;


