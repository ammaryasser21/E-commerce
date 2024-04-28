import React from 'react'
import './css/Contact.css';
import Title from './Title';
const Contact = () => {
  return (
    <>
    <Title title="CONTACT US"/>
    <div className="contact-container">
  <div className="contact-info">
    <h2>Contact Info</h2>
    <p>
      Phone: +012 345 678 102
      <br />
      +012 345 678 203
    </p>
    <p>
      Email: email@here.com
      <br />
      your@email.here
    </p>
    <p>
      Address: Address goes here,
      <br />
      street, Crossroad 123.
    </p>
  </div>
  <div className="contact-form">
    <h2>Get In Touch</h2>
    <form>
      <input type="text" placeholder="First Name" required="" />
      <input type="text" placeholder="Last Name" required="" />
      <input type="text" placeholder="Subject" required="" />
      <textarea placeholder="Message" required="" defaultValue={""} />
      <button type="submit">SEND MESSAGE</button>
    </form>
  </div>
</div>
</>
  )
}

export default Contact