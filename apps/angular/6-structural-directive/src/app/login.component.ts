import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ButtonComponent } from './button.component';
import { InformationComponent } from './information.component';
import {
  admin,
  client,
  everyone,
  manager,
  reader,
  readerAndWriter,
  writer,
} from './user.model';
import { UserStore } from './user.store';

@Component({
  imports: [InformationComponent, RouterLink, ButtonComponent, CommonModule],
  selector: 'app-login',
  template: `
    <header class="flex items-center gap-3">
      Log as :
      <button app-button (click)="admin()">Admin</button>
      <button app-button (click)="manager()">Manager</button>
      <button app-button (click)="reader()">Reader</button>
      <button app-button (click)="writer()">Writer</button>
      <button app-button (click)="readerWriter()">Reader and Writer</button>
      <button app-button (click)="client()">Client</button>
      <button app-button (click)="everyone()">Everyone</button>
    </header>

    <app-information></app-information>

    <button app-button class="mt-10" [routerLink]="dashboardRoute$ | async">
      Enter application
    </button>
    <!-- <button app-button class="mt-10" routerLink="enter">
      Enter application
    </button> -->
  `,
})
export class LoginComponent {
  user$ = this.userStore.user$;

  constructor(private userStore: UserStore) {}

  dashboardRoute$: Observable<string> = this.user$.pipe(
    map((user) => {
      if (!user) return '/'; // Redirect to login if no user

      if (user.isAdmin) return '/admin-dashboard';
      if (user.roles.includes('MANAGER')) return '/manager-dashboard';
      if (user.roles.includes('CLIENT')) return '/client-dashboard';

      return '/'; // Default to login
    }),
  );

  admin() {
    this.userStore.add(admin);
  }
  manager() {
    this.userStore.add(manager);
  }
  reader() {
    this.userStore.add(reader);
  }
  writer() {
    this.userStore.add(writer);
  }
  readerWriter() {
    this.userStore.add(readerAndWriter);
  }
  client() {
    this.userStore.add(client);
  }
  everyone() {
    this.userStore.add(everyone);
  }
}
