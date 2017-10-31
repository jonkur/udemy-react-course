import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-1' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'New Expense',
    note: 'test note',
    amount: 1234,
    createdAt: moment()
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual( [...expenses, expense] );
});

test('should edit an expense', () => {
  const updates = { note: 'This is an updated note', amount: 6900 };
  const action = { type: 'EDIT_EXPENSE', id: expenses[2].id, updates };
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(3);
  expect(state[2].amount).toBe(updates.amount);
  expect(state[2].note).toBe(updates.note);
});

test('should not edit expense if id not found', () => {
  const updates = { note: 'This is an updated note', amount: 6900 };
  const action = { type: 'EDIT_EXPENSE', id: '-1', updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});