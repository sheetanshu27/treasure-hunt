import React, { useState } from 'react';
import bg from '../images/bg5.jpg';
import '../styles/level5.css'
import {Link} from 'react-router-dom'

const Level5=()=>{
    const [key, setkey] = useState("");
   const [result1, setresult1] = useState("");
   const onInput = (event)=>{
       setkey(event.target.value);
   }

   
   const onSubmit=(event)=>{
       event.preventDefault();
       if(key==="Rishikesh")
         setresult1(<>
           <p style={{color:"white"}}>Correct!!!The Yoga from Yoga Capital of World is the real treasure that today's generation need. <br />
           "Yoga is an individual gift of India's ancient tradition and is holistic approach to health and well being." - By Namrendra Modi < br /><br />
           Yoooo!!! You Won. Congratulations.</p>
         </>);
       else setresult1(<p>Oops Wrong key!!</p>)
          
   }
    return(
        <>
        <div className='container-level5'>
           <div className='inner-container-level5'>
              <h3>Welcome to the final destination..</h3>
               <h4>Decrypt the code to go to your dream land after uniting all the codes (Uni-code) you got so far</h4>
               <div className='content'>
                <p><Link to='https://drive.google.com/file/d/1kVAJX2d4PMOjDCXs5NtRszGq9PUwgKnp/view?usp=share_link'>https://drive.google.com/file/d/1kVAJX2d4PMOjDCXs5NtRszGq9PUwgKnp/view?usp=share_link</Link></p>
                <div className='answer2'>
                  <form onSubmit={onSubmit}>
                      <center><input type="text"
                              placeholder='Enter your Key'
                              onChange={onInput}
                              value={key}/></center> <br />
                      <center><button className='btn btn-primary'>Submit</button></center>
                   </form>
                   <p>{result1}</p>
            </div>
               </div>
           </div>
        </div>
        </>
    )
}
export default Level5;