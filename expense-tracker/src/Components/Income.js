import React,{ useState } from 'react'
const Income = ({setIncome}) => {
    const [amount,setAmount] = useState('');
    const handleCheckEvent = (e) => {
        e.preventDefault();
        setIncome(parseFloat(amount));
    }
    return(
        <form onSubmit={handleCheckEvent}>
            <div className='income'>
                <label>Income : </label>
                <input type='number' placeholder = '  Income' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <br></br><br></br>
                <center><input type='submit' value='Set Income' /></center>
            </div>
            
        </form>
        
        
    );
}

export default Income;