import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  console.log(props.expenses);
  const saveFilteredYear = (year) => {
    setFilteredYear(year);
  };
  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === +filteredYear;
  })
  return (
    <div>
      

      <Card className="expenses">
      <ExpensesFilter onFilter={saveFilteredYear} selected={filteredYear} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList filteredItems={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
