import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css'

const NewExpenses = (props) => {
    const [isEdtiing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const CancelEditingHandler = () => {
         setIsEditing(false)
     }
    return <div className='new-expense'>
        {!isEdtiing &&<button onClick={startEditingHandler}>Add new Expense</button>}
        {isEdtiing && <ExpenseForm onCancel={ CancelEditingHandler }onSaveExpenseData={saveExpenseDataHandler} />}
    </div>;
}

export default NewExpenses;
