import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expenses.</h2>;
  }

  return (
    <div>
      {props.filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpensesList;
