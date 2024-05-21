import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import Filter from './Components/Filter';
import Income from './Components/Income';
import './Components/Styles.css'
const App = () => {
  const [expenses,setExpenses] = useState([ ]); 
  const [income,setIncome] = useState(0);
  const [filter, setFilter] = useState({minAmount : 0, maxAmount : Infinity, startDate : '', endDate : ''});
  const addExpense = (expense) => {
    setExpenses([...expenses,expense]);
  } 
  const updateIncome = (newIncome) => {
    setIncome(parseFloat(newIncome));
  }
  const updateFilter = (minAmount,maxAmount,startDate,endDate) => {
      setFilter({minAmount,maxAmount,startDate,endDate});
  }
  const filteredExpenses = expenses.filter(expense => 
    expense.amount >= filter.minAmount && expense.amount <= filter.maxAmount && (filter.startDate === '' || new Date(expense.date) >= new Date(filter.startDate)) && 
    (filter.endDate === '' || new Date(expense.date) <= new Date(filter.endDate)));
  
  const totalExpenses = filteredExpenses.reduce((total,expense) => total + expense.amount, 0);
  const remBal = income - totalExpenses;
  const profit = remBal > 0 ? remBal : 0;
  const loss = remBal < 0 ? -remBal : 0;
  
  return(
    <div className='App'>
      <center><h1>Expense Tracker</h1></center>
      <Income setIncome = {updateIncome} />
      <ExpenseForm addExpense = {addExpense} />
      <ExpenseList expenses={filteredExpenses} />
      <Filter setFilter = {updateFilter} />
      <div className='income '>
          <center><h2>Profit & Loss</h2></center>
          <p>Total Expenses : ${totalExpenses.toFixed(2)}</p>
          <p>Remaining Balance : ${remBal.toFixed(2)}</p>
          { remBal > 0 ? (<strong>Profit : ${profit.toFixed(2)}</strong>) : (<b>Loss : ${loss.toFixed(2)}</b>)}
      </div>
    </div>
  );
};
export default App;