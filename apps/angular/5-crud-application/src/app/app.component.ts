import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TodoStore } from './data-access/store';
import { Todo } from './model/todo.model';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todoStore.todos()">
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
  // todos!: Todo[];
  // Todos: Todo[] = this.todoStore.todos();

  ngOnInit(): void {
    this.todoStore.getAll();
  }

  update(todo: Todo) {
    this.todoStore.updateOne(todo);
  }

  delet(todo: Todo) {
    this.todoStore.deleteOne(todo);
  }
}

// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { randText } from '@ngneat/falso';

// @Component({
//   imports: [CommonModule],
//   selector: 'app-root',
//   template: `
//     <div *ngFor="let todo of todos">
//       {{ todo.title }}
//       <button (click)="update(todo)">Update</button>
//     </div>
//   `,
//   styles: [],
// })
// export class AppComponent implements OnInit {
//   todos!: any[];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http
//       .get<any[]>('https://jsonplaceholder.typicode.com/todos')
//       .subscribe((todos) => {
//         this.todos = todos;
//       });
//   }

//   update(todo: any) {
//     this.http
//       .put<any>(
//         `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
//         JSON.stringify({
//           todo: todo.id,
//           title: randText(),
//           body: todo.body,
//           userId: todo.userId,
//         }),
//         {
//           headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         },
//       )
//       .subscribe((todoUpdated: any) => {
//         this.todos[todoUpdated.id - 1] = todoUpdated;
//       });
//   }
// }
