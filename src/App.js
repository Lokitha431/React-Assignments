import React,{useState} from 'react';
import "./Styles.css";
import Background from './Background';

const Assignment = () => {
  const [color,setColor] = useState(' ');
  const [name,setName] = useState(' ');


  const displayColor = (newColor) => {
    setColor(newColor);
    setName(newColor)
  };

  return(
      <div className='main'>
        <center>
          <h1>Display Color</h1>
            <div className='main-color' style={{background: color}} onClick={displayColor} ><center><br></br>Your favourite color is <br></br>{name}</center></div>
                  <Background displayColor = {displayColor} color = {color} />
        </center>
      </div>

  );
}
export default Assignment;
