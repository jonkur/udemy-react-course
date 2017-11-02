import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

  onSubmit = (updatedExpense) => {
    this.props.editExpense(this.props.expense.id, updatedExpense);
    this.props.history.push('/');
  }

  onRemove = () => {
    this.props.removeExpense(this.props.expense)
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >
          Remove
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, updatedExpense) => dispatch(editExpense(id, updatedExpense)),
    removeExpense: (expense) => dispatch(removeExpense({ ...expense }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);