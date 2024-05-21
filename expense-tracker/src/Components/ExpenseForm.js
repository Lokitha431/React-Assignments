import React ,{useState} from 'react';
const ExpenseForm = ({addExpense}) => {
  const [title,setTitle] = useState(' ');
  const [amount,setAmount] = useState(' ');
  const [date,setDate] = useState(' ');
  const [time,setTime] = useState(' ');
  const handleEvent = (e) => { 
    e.preventDefault();
    if(title && amount && date && time){
      addExpense({ title, amount: parseFloat(amount),date,time, id: Date.now() });
      setTitle(' ');
      setAmount(' ');
      setDate(' ');
      setTime(' ');
    } 
  };

  return(
    
    <form onSubmit={handleEvent}> 
      <div>
        <label>Expense : </label>
          <input type='text' placeholder='  Expense' value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <label>Amount : </label>
          <input type='number' placeholder='  Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      </div>
      <div>
        <label>Date : </label>
          <input type='date'  value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div>
        <label>Time : </label>
          <input type='time' value={time} onChange={(e) => setTime(e.target.value)}/>
      </div>
      <div>
          <center><input type='submit' value='Add Expenses'/></center>
      </div>
    </form>
  );
};
export default ExpenseForm;