import React from 'react'
import linkedin from '../images/linkedin.png'
import insta from '../images/insta.jpeg'
import fb from '../images/fb.jpeg'
const Contactme = () =>{
    return(
        <>
        <center>
            <h3>CONTACT ME</h3>
            <p>If You have any doubt,any time contact me....!</p>
            <p>Phone : (+91) 9110355574</p>
            <p>Email : lokitha431@gmail.com</p>
            <div className="details">
                <div className="resume"><a href="./web&java.pdf" download>Download Resume</a></div>
                <p><img src={linkedin} alt='' /><a href="https://www.linkedin.com/in/duddakuntla-lokitha-0198b4225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><br></br>Linked In</a></p>
                <p><img src={insta} alt='' /><a href="https://www.instagram.com/lokiloki3308/"><br></br>Instagram</a></p>
                <p><img src={fb} alt='' /><a href="https://www.facebook.com/profile.php?id=100062357030827&mibextid=ZbWKwL"><br></br>Facebook</a></p>
            </div>
            <h4>Contact Form</h4> 
            <div class="contact">
                <form action="https://formspree.io/f/xpzgbqqq" method="POST">
                    <input type="text" name="name" placeholder="Enter Your FullName" required />
                    <input type="text" name="phone" placeholder="Enter Your Mobile Number" required />
                    <input type="text" name="email" placeholder="Enter Your Email" required />
                    <select name="continent" required>
                        <option>Asia</option>
                        <option>Africa</option>
                        <option>Europe</option>
                        <option>Antarctica</option>
                        <option>Australia</option>
                        <option>North America</option>
                        <option>South America</option>
                    </select>
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div class="footer"> 
                <div class="end">Questions? Call : 9110355574<br></br><br></br>© 2024 Lokitha Duddakuntla. All rights reserved.</div>
            </div>
        </center>
        
        </>
    )
    
};
export default Contactme;