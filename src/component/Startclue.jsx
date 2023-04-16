import React, { useState } from 'react';
import "../styles/startclue.css"
import { useNavigate} from 'react-router-dom';

const Startclue = ()=>{
    const [ans, setAns] = useState("");
    const [result, setResult]= useState("");
    const navigate = useNavigate();
    const inputEvent=(event)=>{
        setAns(event.target.value);
    }
    const onSubmit=(event)=>{
        
        event.preventDefault();
        const onClick=(event)=>{
            navigate('/level2');
        }
        if(ans==="hyderabad")
         setResult(<>
         <h4>Correct!!! You are ready for the journey. Let's go to the next destination</h4>
         <button className='btn btn-success' onClick={onClick}>Let's Go---&gt;</button>
         </>)
         else setResult(<h4>Oops Wrong!! Use your visual and verbal intelligence.</h4>)
    }
    return(
        <>
         <div className='cont-start'>
            <div className='overlay'></div>
            <div className='incont-start'>
                <p>
                    <h3>“A language is not just words. It’s a culture, a tradition, a unification of a community, a whole history that creates what a community is. It’s all embodied in a language.”</h3>
                </p>
                <br />
                <p><h5>Decode the given below line to get your begining of this mysetrious journey : &gt;</h5></p>
                <br />
                <p>
                
                  ఈ ప్రాంతం దక్కనీ పెయింటింగ్‌లోని గోల్కొండ మరియు పెయింటింగ్ శైలులకు ప్రసిద్ధి చెందింది. తెలంగాణ రాజధాని. 
                </p>
                <form onSubmit={onSubmit}>
                <input type='text'
                        placeholder='Enter your answer'
                        name='ans'
                        onChange={inputEvent}
                        value={ans}
                     /><br />

                     <button className='btn btn-primary'>Submit</button>
                </form>
                <div>{result}</div>
            </div>
         </div>
        </>
    )
}

export default Startclue;