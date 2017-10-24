import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, id, amount, createdAt, note }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h4>{description}</h4>
        </Link>
        <p>Amount: {(amount/100).toFixed(2)} Created at: {createdAt} Note: {note}</p>
    </div>
);

export default ExpenseListItem;