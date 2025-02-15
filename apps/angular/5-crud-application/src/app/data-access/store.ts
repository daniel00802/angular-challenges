import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  public todos = signal<Todo[]>([]);

  constructor(private http: HttpClient) {}

  getAll() {
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((t) => {
        this.todos.set([...t]);
        // this.todos.update(() => t);
        // console.log(t);
      });
  }

  updateOne(todo: Todo) {
    this.http
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
      .subscribe((todoUpdated: Todo) => {
        this.todos.update((prevTodos) => {
          const updatedTodos = [...prevTodos];
          const index = updatedTodos.findIndex((t) => t.id === todoUpdated.id);
          if (index !== -1) {
            updatedTodos[index] = todoUpdated;
          }
          return updatedTodos;
        });
      });
  }

  deleteOne(todo: Todo) {
    this.http
      .delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
      .subscribe(() => {
        this.todos.update((prevTodos) =>
          prevTodos.filter((t) => t.id !== todo.id),
        );
      });
  }
}
