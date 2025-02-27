import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { UserStore } from './user.store';

@Directive({
  selector: '[hasRoleSuperAdmin]',
  standalone: true,
})
export class HasRoleSuperAdminDirective {
  private userStore = inject(UserStore);

  @Input() set hasRoleSuperAdmin(enabled: boolean) {
    if (!enabled) return;
    this.userStore.user$.subscribe((user) => {
      if (user?.isAdmin) {
        this.viewContainer.clear();
        console.log('------------------');
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
