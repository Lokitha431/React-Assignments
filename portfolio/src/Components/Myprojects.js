import React from 'react'
import netflix from '../images/netflix.png';
import knight from '../images/nightbite.png';
import surprise from '../images/surprise.png';
import instagram from '../images/instagram.png';
import shadi from '../images/shadi.png';
import frozen from '../images/frozen.png';
import image from '../images/imagegallery.png';
import api from '../images/apifetch.png';
import calsi from '../images/calculator.png';
import facebook from '../images/facebook.png';
import todo from '../images/todo.png';
import changingcolor from '../images/changingcolor.png';
import expense from '../images/expensetracker.png';
import portfolio from '../images/portfolio.png';

const Myproject = () => {
    return(
        <>
        <center> 
            <h3>MY PROJECTS</h3>
            <p>Using HTML & CSS I did these Projects</p><br></br></center>
            <div className="container">
                <div className="box"><img src={netflix} alt="" /></div><div className="title">Project 1 <br></br><i>NETFLIX.com</i></div>
                <div className="title">Project 2<br></br><i>KNIGHT BITE</i></div><div className="box"><img src={knight} alt="" /></div>
                <div className="box"><img src={surprise} alt="" /></div><div className="title">Project 3<br></br><i>Surprise.com</i></div>
                <div className="title">Project 4<br></br><i>Instagram</i></div><div className="box"><img src={instagram} alt="" /></div>
                <div className="box"><img src={shadi} alt="" /></div><div className="title">Project 5<br></br><i>Shadi.com</i></div>
                <div className="title">Project 6 <br></br><i>Frozen Yogurt</i></div><div className="box"><img src={frozen} alt="" /></div>
                <div className="box"><img src={image} alt="" /></div><div className="title">Project 7<br></br><i>Image Gallery</i></div>
            </div>
            <center><p>Using HTML,CSS & JavaScript I did these Projects</p><br></br></center>
            <div className="container">
                <div className="box"><img src={api} alt="" /></div><div className="title">Project 1 <br></br><i>API FETCH</i></div>
                <div className="title">Project 2<br></br><i>Facebook Login Page</i></div><div className="box"><img src={facebook} alt="" /></div>
                <div className="box"><img src={calsi} alt="" /></div><div className="title">Project 3<br></br><i>Calculator</i></div>
                
            </div>
            <center><p>Using HTML,CSS,JavaScript & ReactJs I did these Projects</p><br></br></center>
            <div className="container">
                <div className="box"><img src={todo} alt="" /></div><div className="title">Project 1 <br></br><i>TODO List Application</i></div>
                <div className="title">Project 2<br></br><i>Changing Color</i></div><div className="box"><img src={changingcolor} alt="" /></div>
                <div className="box"><img src={expense} alt="" /></div><div className="title">Project 3<br></br><i>Expense-Tracker</i></div>
                <div className="title">Project 4<br></br><i>Portfolio</i></div><div className="box"><img src={portfolio} alt="" /></div>
            </div>
        </>
    )
};
export default Myproject;