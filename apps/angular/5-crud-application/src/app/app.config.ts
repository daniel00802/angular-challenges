import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { TodoEffects } from './store/todo.effects';
import { todoReducer } from './store/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore({ todos: todoReducer }),
    TodoEffects,
  ],
};
