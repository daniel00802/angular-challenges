import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LoadingSpinnerComponent } from './component/loading-spinner.component';
import { TodoStore } from './data-access/store';
import { LoadingSpinnerService } from './loading-spinner.service';
import { Todo } from './model/todo.model';

@Component({
  imports: [CommonModule, LoadingSpinnerComponent],
  selector: 'app-root',
  template: `
    <app-loading-spinner
      *ngIf="loadingSpinnerService.isLoading()"></app-loading-spinner>
    <div *ngFor="let todo of this.todoStore.todos()">
      {{ todo.title }}
      &nbsp;
      <button (click)="update(todo)">Update</button>
      &nbsp;
      <button (click)="delet(todo)">Delete</button>
      <br />
      <br />
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  public todoStore = inject(TodoStore);
  public loadingSpinnerService = inject(LoadingSpinnerService);
  // store = inject(Store);

  // constructor(public store: Store) {}
  // todos = this.store.select(selectTodos);

  ngOnInit(): void {
    // this.store.dispatch(getTodos());
    // this.todos.subscribe(() => {
    // console.log('Only here... appears');
    // });
    this.todoStore.getAll();
    // console.log(this.todos);
  }

  update(todo: Todo) {
    // this.store.dispatch(updateTodo({ todo }));
    this.todoStore.updateOne(todo);
  }

  delet(todo: Todo) {
    // this.store.dispatch(deleteTodo({ id: todo.id }));
    this.todoStore.deleteOne(todo);
  }
}
