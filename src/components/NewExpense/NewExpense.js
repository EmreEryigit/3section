import "./NewExpense.css"

import React from 'react'
import ExpenseForm from "./ExpenseForm"

function NewExpense(props) {
    const saveExpenseDataHandler= (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onSaveExpense(expenseData);
    }
  return (
    <div className="new-expense">
        <ExpenseForm onSaveData={saveExpenseDataHandler}  />
    </div>
  )
}

export default NewExpense
