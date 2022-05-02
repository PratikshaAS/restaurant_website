import React,{useState} from 'react'
import axios from 'axios'
const Contact = () => {
    const [user,setUserdata]=useState({name:"",phone:"",email:"",message:""});
    // const history=useHistory();
    const handleInputs=(e)=>{
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
        setUserdata({...user,[name]:value})
    }

    const postdata = () =>{
        let data = {
            "name":user.name,
            "phone":user.phone,
            "email":user.email,
            "message":user.message,
        }
        axios.post('http://localhost:5000/contact', data)
        .then(res=>{
            alert("contact added successfully!");
        })
        .catch(err=>alert(err));
    }
    // const Postdata=async(e)=>{
    //     console.log("inside postdata",user);
    //     e.preventDefault();
        
    //     console.log("callContactPage");
    //     const {name,phone,email,message}=user
    //     try{
    //         const res=await fetch("localhost:5000/contact",{
    //             method:"POST",
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify({
    //                 name:name,phone:phone,email:email,message:message
    //             })

    //         });
    //         const data=await res.json();
    //         console.log("data=",data);
           
    //         if(data.status===422 || !data) 
    //         {
    //             window.alert("invalid registration");
    //             console.log("Invalid Registration");
    //             const error=new Error(res.error);
    //             console.log(error);
    //             throw error;
    //         }else{
    //             window.alert("registration successull");
    //             console.log("regstration successfull");
    //             // history.push("/");
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
   
  return (
    <div class="main-container">
        <div class="container">
        
        
            <form name="contactform" method="POST" action='\contact' >
                <h3 class="form-heading" >Contact Us</h3>
                <br/><hr/>
                <div class="mb-3">
                    <label for="UserName" class="form-label">Name</label><br/>
                    <input type="text" name="name" value={user.name} onChange={handleInputs} class="form-control form_input"  />
                
                </div>
            
                <div class="mb-3">
                    <label for="PhoneNumber" class="form-label">Phone</label><br/>
                    <input type="number" value={user.phone}  onChange={handleInputs} name="phone" class="form-control form_input" />
                
                </div>
                <div class="mb-3">
                    <label for="EmailId" class="form-label">Email</label><br/>
                    <input type="email" name="email" value={user.email}  onChange={handleInputs} class="form-control form_input"  />
                
                </div>
                <div class="mb-3">
                    <label for="MessageBox" class="form-label">Message</label><br/>
                    <input type="text" name="message" value={user.message}  onChange={handleInputs} class="form-control form_input"  />
                
                </div>
                <br/><hr/>
                
                <button type="submit" onClick={()=>postdata()} id="submit"  class="btn btn-primary">Submit</button><br/><hr/>
                
            </form>
            <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.623203483516!2d73.81927943955078!3d18.4914531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff990000001%3A0x3291e3e36f9ad234!2sPune-Okayama%20Friendship%20Garden!5e0!3m2!1sen!2sin!4v1650525844023!5m2!1sen!2sin" style={{width:"100%"}}></iframe>
      </div>          
        </div>
    </div>
  )
}

export default Contact