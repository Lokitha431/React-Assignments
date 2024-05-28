import React from 'react'
import photo from '../images/photo.jpg';
const Homepage = () => {
    return(
    <>
        <center><h1>Lokitha Duddakuntla Portfiloo</h1>
            <div className="header">
                <a href="./Aboutme.html">ABOUT ME</a>
                <a href="./Education.html">EDUCATION</a>
                <a href="./Technical.html">TECHNICAL SKILLS</a>
                <a href="./Myprojects.html">MY PROJECTS</a>
                <a href="./Contactme.html">CONTACT ME</a>
            </div> 
        </center>
        <div className='home'>
            <div className='photo'><img src={photo} alt="Description of Images" /></div>
            <h2>I am Lokitha <br></br>I'm a Software Developer</h2>
        </div>
        
    </>
    )
    
}
export default Homepage;