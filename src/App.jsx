import Expenses from './compnents/Expenses';
import { useState } from 'react';
import './App.css'
import NewExpense from './compnents/NewExpense/NewExpense';
const DUMMY_EXPENSES =[
  {
    id:'e1',
    title:'Toilet paper',
    amount:94.12,
    date:new Date(2020,7,14),
  },
  {
    id:'e2',
    title:'Car Insurance',
    amount:344.12,
    date:new Date(2021,2,28),
  },
  {
    id:'e3',
    title:'News TV',
    amount:924.12,
    date:new Date(2021,4,14),
  },
  {
    id:'e4',
    title:'New desk',
    amount:450,
    date:new Date(2021,5,23),
  }
];
function App() {
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  function addExpenseHandler(expense){
    
    // setExpenses([expense,...expenses]);
    setExpenses((prevExpense)=>{
      return[expense,...prevExpense]
    });
  }
  return (

    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}></Expenses>
    </div>
    
  )
}

export default App
