import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  // const [items, setItems] = useState(props.items)
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setfilteredYear(selectedYear);
    // setItems(items.filter((item) => item.date.getFullYear().toString() !== selectedYear))
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expenseContent = <p>No Expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })
  }


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangefilter={filterChangeHandler}
        />

        {/* pattern 3 */}

        {expenseContent}

        {/* patter one */}

        {/* {filteredExpenses.length === 0 && <p>No Expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })} */}
        
                {/*  pattern 2  */}
        {/* {filteredExpenses.length === 0 ? (<p>No Expenses found.</p>) : (
          filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
