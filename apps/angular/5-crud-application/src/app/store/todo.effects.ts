import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { Todo } from '../model/todo.model';
import {
  deleteTodo,
  deleteTodoSuccess,
  getTodos,
  getTodosSuccess,
  updateTodo,
  updateTodoSuccess,
} from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      mergeMap(() => {
        console.log('Fetcing Todos...');
        return this.http
          .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            map((todos) => {
              console.log('downloaded');
              return getTodosSuccess({ todos });
            }),
            catchError((error) => {
              console.error('Error fetching todos:', error);
              return of(getTodosSuccess({ todos: [] })); // Handle the error and return an empty array
            }),
          );
      }),
    ),
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      switchMap((action) => {
        const { todo } = action; // Extract todo from action

        return this.http
          .put<Todo>(
            `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
            JSON.stringify({
              id: todo.id,
              title: randText(),
              completed: todo.completed,
              userId: todo.userId,
            }),
            {
              headers: { 'Content-type': 'application/json; charset=UTF-8' },
            },
          )
          .pipe(map((updatedTodo) => updateTodoSuccess({ updatedTodo })));
      }),
    ),
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      switchMap(({ id }) =>
        this.http
          .delete<{ id: number }>(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
              headers: { 'Content-type': 'application/json; charset=UTF-8' },
            },
          )
          .pipe(map(() => deleteTodoSuccess({ id }))),
      ),
    ),
  );
}
