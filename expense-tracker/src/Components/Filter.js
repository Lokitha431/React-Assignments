import React,{ useState } from 'react';
const Filter = ({setFilter}) => {
    const [minAmount,setMinAmount] = useState('');
    const [maxAmount,setMaxAmount] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const handleEvent = () => {
        setFilter(parseFloat(minAmount),parseFloat(maxAmount),startDate,endDate)
    };
    return(
        <div>
            <label>Min Amount : </label>
            <input type='number' placeholder = 'Min Amount' value={minAmount} onChange={(e) => setMinAmount(e.target.value)}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Max Amount : </label>
            <input type='number' placeholder = 'Max Amount' value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)}/>
            <br></br><br></br>
            <label>Start Date : </label>
            <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>End Date : </label>
            <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            <br></br><br></br>
            <center><input type='submit' value='Fliter' onClick={handleEvent}/></center>
        </div>
    );
}
export default Filter;