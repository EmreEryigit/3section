import "./NewExpense.css"

import React, {useState} from 'react'
import ExpenseForm from "./ExpenseForm"

function NewExpense(props) {
  const [adding, setAdding] = useState(false);
    const saveExpenseDataHandler= (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onSaveExpense(expenseData);
    }
    if(!adding) {
        return (
            <div className="new-expense">
                <button onClick={() => setAdding(true)}>Add new expense</button>
            </div>
        )
    }

  return (
    <div className="new-expense">
        <ExpenseForm setAdding={setAdding} onSaveData={saveExpenseDataHandler}  />
    </div>
  )
}

export default NewExpense
