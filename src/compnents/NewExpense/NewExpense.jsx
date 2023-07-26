import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
    const[isEditing,setEditing]=useState(false)
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false)
    }
    function startEditing(){
        setEditing(true);
    }
    function stopEditing(){
        setEditing(false);
    }
  return <div className="new-expense">
    {!isEditing &&<button onClick={startEditing}>Add New Expense</button>}
    {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}></ExpenseForm>}
  </div>;
}
export default NewExpense;
