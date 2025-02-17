import { createReducer, on } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import {
  deleteTodoSuccess,
  getTodosSuccess,
  updateTodoSuccess,
} from './todo.actions';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(getTodosSuccess, (state, { todos }) => {
    console.log('Updated state:', { ...state, todos });
    return { ...state, todos: [...todos] };
    // todos: [...state.todos, todo],
  }),
  on(updateTodoSuccess, (state, { updatedTodo }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    ),
  })),
  on(deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
);
