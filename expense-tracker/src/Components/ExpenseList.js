import React from 'react';
const ExpenseList = ({expenses}) => { 

    return(
        <ul>
            {expenses.map((expense) => {
                const dateTimeString = `${expense.date}T${expense.time}`;  
                const dateTime = new Date(dateTimeString);
                const writeDate = dateTime.toLocaleDateString('en-US',{year : 'numeric', month : 'long', day : 'numeric'});
                const writeTime = dateTime.toLocaleTimeString('en-US',{hour : '2-digit', minute : '2-digit', second : '2-digit'});
                return(
                    <li key={expense.id}>{expense.title} : ${expense.amount.toFixed(2)} , Spent on - {writeDate} , Time is - {writeTime}</li>
                );
            })}
        </ul> 
    );
};
export default ExpenseList; 