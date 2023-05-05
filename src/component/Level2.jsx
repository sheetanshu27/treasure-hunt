import React, { Component } from 'react';
import "../styles/level2.css";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import Card from "./Card";
import Jhansiimage from "../images/RaniLaxmiOfJhansi.jpg"
import Agraimage from "../images/AkbarOfAgra.jpg";
import Lucknowimage from "../images/BegamHazratOfLucknow.jpg"

const Level2 =()=>{
    return(
        <>
         <div className='con-level2'>
             <div className='innercont-level2'>
                <h2>Welcome to Stage-2 of the game</h2>
                <hr />
                <br />
                  <p>Follow the given clue to choose the correct tile for the next destination..</p>
                  <p>Sometimes you need to find the hidden meaning of the text.</p>
                  <p>Hint: The answer to your door is a 6 digit code.</p>
                  <center><p><Link to="https://drive.google.com/file/d/1DxbvDq5jgm-_5ZpTus99zdnwUEav842X/view?usp=share_link" target="_blank">https://drive.google.com/file/d/1DxbvDq5jgm-_5ZpTus99zdnwUEav842X/view?usp=share_link</Link></p></center>
                  
            </div>
            <div className='cards'>
                  <div className='cd'>
                  <Card ans="284002"
                  link="/level31"
                  message="Use your visual intelligence."
                  image={Jhansiimage}
                  title="Guess from where I am?"
                  content="She was one of the leading figures in the Indian Rebellion of 1857 became a symbol of resistance to the British rule in India for Indian nationalists.When the Maharaja died in 1853, the British East India Company under Governor-General Lord Dalhousie refused to recognize the claim of his adpoted heir and annexed her teritory under the Doctrine of Lapse. The Rani was unwilling to cede control joined the rebellion against the British in 1857." />
                  </div>
                  <div className='cd'>
                  <Card ans="282002"
                  link="/level32"
                  message="Use your visual intelligence."
                  image={Agraimage}
                  title="Guess from where I am?"
                  content="He was the third Mughal emperor, who reigned from 1556 to 1605.He was a patron of art and culture and also established the library of Fatehpur Sikri exclusively for women. His courts at Delhi, Agra, and Fatehpur Sikri became centres of the arts, letters, and learning." />
                  </div>
                  <div className='cd'>
                  <Card ans="226002"
                  link="/error"
                  message="Use your visual intelligence."
                  image={Lucknowimage}
                  title="Guess from where I am?"
                  content="She, also known as the Begum of Awadh, was the second wife of Nawab of Awadh Wajid Ali Shah, and the regent of Awadh in 1857–1858. She is known for the leading role she had in the rebellion against the British East India Company during the Indian Rebellion of 1857." />
                  </div>
            </div>
            
          </div>
          <Footer 
          content ="India is a civilization with a history that is thousands of years old.The diversity of India, of our civilization, is actually a thing of beauty, which is something we are extremely proud of.-
      
          Narendra Modi" heading="Valid Codes" content1="282002" content2="284002" content3="284001" content4="226002" content5="226006" content6="229002" content7="226807"
         />
        </>
    )
}

export default Level2;