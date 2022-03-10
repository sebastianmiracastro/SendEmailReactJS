import React from 'react'
import emailjs from 'emailjs-com'

export const MainPage = () => {
 
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_y2yo8ch')

    }

  return (
    <div>
        <h1 className='title-form'>Contact Us</h1>
        <form className='form-mail' onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name='user_name' />
            <hr />
            <label>Email</label>
            <input type="email" name='user_email' />
            <hr />
            <label>Message</label>
            <textarea name="user_message" id="" cols="30" rows="10"></textarea>
            <hr />
            <button>Send</button>
        </form>
    </div>
  )
}
