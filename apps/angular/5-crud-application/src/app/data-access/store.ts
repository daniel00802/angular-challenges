import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { randText } from '@ngneat/falso';
import { LoadingSpinnerService } from '../loading-spinner.service';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  public todos = signal<Todo[]>([]);

  constructor(
    private http: HttpClient,
    private loadingSpinnerService: LoadingSpinnerService,
  ) {}

  getAll() {
    this.loadingSpinnerService.show();

    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      // .subscribe((t) => {
      //   this.todos.set([...t]);
      //   // this.todos.update(() => t);
      //   // console.log(t);
      // });
      .subscribe({
        next: (t) => {
          // Hide the spinner once the data is fetched successfully
          this.loadingSpinnerService.hide();
          this.todos.set([...t]);
          console.log(t);
        },
        error: (err) => {
          // Hide the spinner if there's an error in fetching
          this.loadingSpinnerService.hide();
          console.error('Data fetching failed', err);
        },
      });
  }

  updateOne(todo: Todo) {
    this.loadingSpinnerService.show();
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
      .subscribe({
        next: (todoUpdated: Todo) => {
          this.loadingSpinnerService.hide(); // Hide the spinner after successful update
          this.todos.update((prevTodos) => {
            const updatedTodos = [...prevTodos];
            const index = updatedTodos.findIndex(
              (t) => t.id === todoUpdated.id,
            );
            if (index !== -1) {
              updatedTodos[index] = todoUpdated;
            }
            return updatedTodos;
          });
        },
        error: (err) => {
          this.loadingSpinnerService.hide(); // Hide the spinner if there's an error during update
          console.error('Update failed', err);
        },
      });
  }

  deleteOne(todo: Todo) {
    this.loadingSpinnerService.show();
    this.http
      .delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
      .subscribe(() => {
        this.loadingSpinnerService.hide();
        this.todos.update((prevTodos) =>
          prevTodos.filter((t) => t.id !== todo.id),
        );
      });
  }
}
