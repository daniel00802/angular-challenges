import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subscription',
  imports: [AsyncPipe],
  template: `
    <div>TestId: {{ testId }}</div>
    <div>Permission: {{ permission }}</div>
    <div>User: {{ user }}</div>
  `,
})
export default class TestComponent {
  // @Input({ required: true, alias: 'testId', routeParam: 'testId' }) testId!: string;
  // @Input({ required: true, alias: 'permission', routeData: 'permission' }) permission!: string;
  // @Input({ alias: 'user', queryParam: 'user' }) user?: string;
  @Input() testId!: string;
  @Input() permission!: string;
  @Input() user!: string;
  // private activatedRoute = inject(ActivatedRoute);

  // testId$ = this.activatedRoute.params.pipe(map((p) => p['testId']));
  // permission$ = this.activatedRoute.data.pipe(map((d) => d['permission']));
  // user$ = this.activatedRoute.queryParams.pipe(map((q) => q['user']));
}
