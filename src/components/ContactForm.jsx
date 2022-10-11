import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/contactform.css'

const ContactForm = () => {
    const form = useRef();

    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xaqewea', 'template_rovb20u', form.current, 'FwpjAxS2GjmZTuV_W')
            .then((result) => {
                console.log(result.text);
                navigate('/projects')
            }, (error) => {
                console.log(error.text);
            });
        alert('Email sent successfully!')
    };

    const onKeyDown = (keyEvent) => {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }

    return (
        <div className='box'>
            <form ref={form} onSubmit={sendEmail}  onKeyDown={onKeyDown} className='form'>
                <h2>Contact</h2>
                <div className='inputBox'>
                    <input type="text" name="user_name" required='required'/>
                    <span>Name</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="email" name="user_email" required='required'/>
                    <span>Email</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input name="message" required='required'/>
                    <span>Message</span>
                    <i></i>
                </div>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm