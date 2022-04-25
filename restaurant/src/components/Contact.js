import React from 'react'

const Contact = () => {
  return (
    <div class="main-container">
        <div class="container">
        
        
            <form name="contactform">
                <h3 class="form-heading" >Contact Us</h3>
                <br/><hr/>
                <div class="mb-3">
                    <label for="UserName" class="form-label">Name</label><br/>
                    <input type="text" name="Name" class="form-control form_input"  />
                
                </div>
            
                <div class="mb-3">
                    <label for="PhoneNumber" class="form-label">Phone</label><br/>
                    <input type="number" name="Phone" class="form-control form_input" />
                
                </div>
                <div class="mb-3">
                    <label for="EmailId" class="form-label">Email</label><br/>
                    <input type="email" name="Email" class="form-control form_input"  />
                
                </div>
                <div class="mb-3">
                    <label for="MessageBox" class="form-label">Message</label><br/>
                    <input type="text" name="Message" class="form-control form_input"  />
                
                </div>
                <br/><hr/>
                
                <button type="submit" id="submit" class="btn btn-primary">Submit</button><br/><hr/>
                
            </form>
            <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.623203483516!2d73.81927943955078!3d18.4914531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff990000001%3A0x3291e3e36f9ad234!2sPune-Okayama%20Friendship%20Garden!5e0!3m2!1sen!2sin!4v1650525844023!5m2!1sen!2sin" style={{width:"100%"}}></iframe>
      </div>          
        </div>
    </div>
  )
}

export default Contact