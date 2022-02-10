import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  // const [items, setItems] = useState(props.items)
  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setfilteredYear(selectedYear);
    // setItems(items.filter((item) => item.date.getFullYear().toString() !== selectedYear))
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangefilter={filterChangeHandler}
        />
        <ExpensesChart expenses={ filteredExpenses }/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
