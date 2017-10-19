import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            This is the Edit Expense page!
            <p>Now editing expense with the ID of {props.match.params.id}</p>
        </div>
    )
};

export default EditExpensePage;