import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo.model';

export const getTodos = createAction('[Todo] Get All Todos');

export const getTodosSuccess = createAction(
  '[Todo] Got All Todos',
  props<{ todos: Todo[] }>(),
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: Todo }>(),
);

export const updateTodoSuccess = createAction(
  '[Todo] Updated Todo',
  props<{ updatedTodo: Todo }>(),
);

export const deleteTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: number }>(),
);

export const deleteTodoSuccess = createAction(
  '[Todo] Removed Todo',
  props<{ id: number }>(),
);
