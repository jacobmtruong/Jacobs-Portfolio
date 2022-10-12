import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactform.css'
import close from '../images/close.svg';

const ContactForm = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xaqewea', 'template_rovb20u', form.current, 'FwpjAxS2GjmZTuV_W')
            .then((result) => {
                console.log(result.text);
                props.toggleContact()
            }, (error) => {
                console.log(error.text);
            });
        alert('Thank you! I will contact you shortly ...')
    };

    const onKeyDown = (keyEvent) => {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }


    return (
        <div className='box'>
            <div className='overlay'></div>
            <form ref={form} onSubmit={sendEmail} onKeyDown={onKeyDown} className='form'>
                <img src={close} alt="close-icon" className='btn-close' onClick={props.toggleContact} />
                <h2>Contact</h2>
                <div className='inputBox'>
                    <input type="text" name="user_name" required='required' />
                    <span>Name</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="email" name="user_email" required='required' />
                    <span>Email</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input name="message" required='required' />
                    <span>Message</span>
                    <i></i>
                </div>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm