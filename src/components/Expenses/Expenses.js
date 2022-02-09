import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020')
  // const [items, setItems] = useState(props.items)
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setfilteredYear(selectedYear);
    // setItems(items.filter((item) => item.date.getFullYear().toString() !== selectedYear))
  }
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangefilter={ filterChangeHandler }/>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      </Card>
      </div>
  );
};

export default Expenses;
