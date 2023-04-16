import React, { useState } from 'react';
import "../styles/level31.css";
import Card from "../component/Card"
import Door1 from "../images/door1.jpg"
import {Link} from "react-router-dom";
import Footer from "../component/Footer"
import { useNavigate } from 'react-router-dom';

const Level32 = ()=>{
   const [key, setkey] = useState("");
   const [result1, setresult1] = useState("");
   const onInput = (event)=>{
       setkey(event.target.value);
   }
   const navigate = useNavigate();
   const onClick1=(event)=>{
        navigate("/level41");
   }
   const onClick2=(event)=>{
      navigate("/level41");
 }
   const onSubmit=(event)=>{
       event.preventDefault();
       if(key==="New Delhi")
         setresult1(<>
           <p>Correct!!!Let's go to the next destination</p>
        <button className='btn btn-success' onClick={onClick1}>Let's Go---&gt;</button>
         </>); else if(key==="Mathura")
         setresult1(<>
            <p>Correct!!!Let's go to the next destination</p>
         <button className='btn btn-success' onClick={onClick2}>Let's Go---&gt;</button>
          </>
         )
       else setresult1(<p>Oops Wrong key!!</p>)
          
   }
   return (
    <>
     <div className='container-level31'>
     
        <div className='inner-container-level31'>
        <center><h3>Welcome to Stage-3 of the game</h3></center>
        <center><h4>Open the door to your next location. Do not open the wrong one!!</h4></center>
        <center><p className='hint'>Scroll down to get some hint!!</p></center>
         {/* <div className='overlay'></div> */}
        <div className='cards-level31'>
                  <div className='cd'>
                  <Card ans="djfksjfksdjfsn"
                  link="/level3"
                  image={Door1}
                  message="Wrong lock"
                  title=""
                  content={<Link to="https://drive.google.com/file/d/1UJZT1HNSEdCfZ3g1RDP8u1tpx67aaWNQ/view?usp=share_link">Download Image</Link>}/>
                  </div>
                  <div className='cd'>
                  <Card ans="fshfjsdlfjsdll"
                  link="/level3"
                  message="Wrong lock"
                  image={Door1}
                  title=""
                  content={<Link to="https://drive.google.com/file/d/1YCUKJlyBr7s8qixnECmilSsGBednSj_f/view?usp=share_link">Download Image</Link>} />
                  </div>
                  
            </div>
            
        </div>
        <Footer 
          content ={<><p>“Aren’t hidden doors the most alluring? The old stories point that out surely. Even the greatest heroes and heroines fall under the spell of a locked door.”
            — Jane Yolen</p><br />
            <p>"“But magic is sometimes all about knowing where the secret door is, and how to open it. With that, you’re gone.”
          — Michael Cunningham"</p></>} heading={<><div className='answer'>
                  <form onSubmit={onSubmit}>
                      <input type="text"
                              placeholder='Enter your Key'
                              onChange={onInput}
                              value={key}/>
                      <button className='btn btn-primary'>Submit</button>
                   </form>
                   <p>{result1}</p>
            </div></>} content1="" content2="" content3="" content4="" content5="" content6="" content7="Online Steganography"
         />
        
     </div>
    </>
   )
}
export default Level32;