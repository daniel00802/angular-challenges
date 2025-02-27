import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { UserStore } from './user.store';

@Directive({
  selector: '[hasRole]',
  standalone: true,
})
export class HasRoleDirective {
  private userStore = inject(UserStore); // Using inject() to avoid constructor injection
  private roles: string[] = [];

  @Input() set hasRole(role: string | string[]) {
    this.roles = Array.isArray(role) ? role : [role];
    this.updateView();
  }

  private updateView() {
    this.userStore.user$.subscribe((user) => {
      if (user?.roles.some((role) => this.roles.includes(role))) {
        this.viewContainer.clear();
        console.log('-------------------', this.roles);
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}
}
