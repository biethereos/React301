import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const addNewExpenseData = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={addNewExpenseData} />
    </div>
  );
};

export default NewExpense;
