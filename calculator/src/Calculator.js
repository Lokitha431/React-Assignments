import React, { useState } from 'react';

const Calculator = () => {
    const[input,setInput] = useState(' ');
    const handleClick = (value) => {
        setInput(input + value);
      };
    
      const handleClear = () => {
        setInput('');
      };
    
      const handleResult = () => {
          setInput(eval(input).toString());
      };
    return(
        <center>
            <table border="10" cellSpacing="10">
                <tbody>
                    <tr>
                        <th colSpan="4">
                            <input type="text" value={input} placeholder="Calculator" readOnly />
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="2" onClick={handleClear}>CE</th>
                        <th onClick={() => handleClick('/')}>/</th>
                        <th onClick={() => handleClick('*')}>*</th>
                    </tr>
                    <tr>
                        <th onClick={() => handleClick('7')}>7</th>
                        <th onClick={() => handleClick('8')}>8</th>
                        <th onClick={() => handleClick('9')}>9</th>
                        <th onClick={() => handleClick('-')}>-</th>
                    </tr>
                    <tr>
                        <th onClick={() => handleClick('4')}>4</th>
                        <th onClick={() => handleClick('5')}>5</th>
                        <th onClick={() => handleClick('6')}>6</th>
                        <th onClick={() => handleClick('+')}>+</th>
                    </tr>
                    <tr>
                        <th onClick={() => handleClick('1')}>1</th>
                        <th onClick={() => handleClick('2')}>2</th>
                        <th onClick={() => handleClick('3')}>3</th>
                        <th rowSpan="2" onClick={handleResult}>=</th>
                    </tr>
                    <tr>
                        <th onClick={() => handleClick('%')}>%</th>
                        <th onClick={() => handleClick('0')}>0</th>
                        <th onClick={() => handleClick('.')}>.</th>
                    </tr>
                </tbody>
            </table>
        </center>
    
    )
}
 export default Calculator;