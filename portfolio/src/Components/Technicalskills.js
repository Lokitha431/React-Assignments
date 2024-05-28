import React from 'react'
import java from '../images/Java.png';
import html from '../images/html 5.png';
import css from '../images/css 3.png';
import js from '../images/js 6.png';
import react from '../images/React.png';
const Technical = () => {
    return(
        <>
            <center><h3>TECHNICAL SKILLS</h3></center>
                <div className="technical">
                    <button className='button'>CORE JAVA<img src={java} alt=''/></button>
                    <button className='button'>HTML 5<img src={html} alt=''/></button>
                    <button className='button'>CSS 3<img src={css} alt=''/></button>
                    <button className='button'>JAVASCRIPT<img src={js} alt=''/></button>
                    <button className='button'>REACT JS<img src={react} alt=''/></button>
                </div>
            
            
        </>
    ) 
}
export default Technical;