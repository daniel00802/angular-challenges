import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]',
  standalone: true, // Standalone directive
})
export class ForDirective<T> {
  private items: T[] = [];
  private emptyTemplate: TemplateRef<any> | null = null;

  @Input() set appForOf(items: T[]) {
    this.items = items;
    this.render();
  }

  @Input() set appForEmpty(template: TemplateRef<any>) {
    this.emptyTemplate = template;
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {}

  private render() {
    this.viewContainer.clear();
    if (this.items.length > 0) {
      this.items.forEach((item) => {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: item,
        });
      });
    } else if (this.emptyTemplate) {
      this.viewContainer.createEmbeddedView(this.emptyTemplate);
    }
  }
}
