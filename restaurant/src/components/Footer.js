import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.623203483516!2d73.81927943955078!3d18.4914531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff990000001%3A0x3291e3e36f9ad234!2sPune-Okayama%20Friendship%20Garden!5e0!3m2!1sen!2sin!4v1650525844023!5m2!1sen!2sin" ></iframe>
      </div>
      <div className='handles'>
        <ul>
          <li><span> Email</span></li>
          <li><span> Instagram</span></li>
          <li><span><i className="fa-brands fa-whatsapp"></i> Whatsapp</span></li>
          <li><span><i className="fa-brands fa-whatsapp"></i> Email</span></li>

        </ul>
      </div>
    </div>
  )
}

export default Footer