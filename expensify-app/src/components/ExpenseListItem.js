import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, id, amount, createdAt }) => (
    <div>
        <h4>{description}</h4>
        <p>Amount: {amount} Created at: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);