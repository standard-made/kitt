import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_madeC137', 'template_madeC137', form.current, 'wlDEKQOlCp3RYKyi2')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <artice className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kit@made.llc</h5>
            <a href="mailto:kit@made.llc" rel="noreferrer" target="_blank">Send a message</a>
          </artice>
          <artice className="contact__option">
            <MdOutlineMarkEmailUnread className='contact__option-icon' />
            <h4>Backup Email</h4>
            <h5>kit@standardmade.co</h5>
            <a href="mailto:kit@standardmade.co" rel="noreferrer" target="_blank">Send a message</a>
          </artice>
          <artice className="contact__option">
            <FiPhoneCall className='contact__option-icon' />
            <h4>Mobile</h4>
            <h5>+420-F**-*OFF</h5>
            <a href="https://api.whatsapp.com/send?phone+1404123456" rel="noreferrer" target="_blank">Send a message</a>
          </artice>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name ="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact