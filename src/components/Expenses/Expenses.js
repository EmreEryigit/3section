import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  console.log(props.expenses)
   const saveFilteredYear = (year) => {
      setFilteredYear(year)
      console.log(filteredYear);
      console.log(year);
      
   }
   console.log(filteredYear)
  return (
    <div>
      <ExpensesFilter  onFilter={saveFilteredYear} selected={filteredYear}/>
  
    <Card className='expenses'>
       {props.expenses.map(expense => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))}
    </Card>
    </div>
  )
}

export default Expenses
