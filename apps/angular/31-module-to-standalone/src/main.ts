// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

import { MainShellModule } from '@angular-challenges/module-to-standalone/shell';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: MainShellModule, useClass: MainShellModule }, // If needed, adjust this based on your module's requirements
  ],
});
