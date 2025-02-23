import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Fix: Import HttpClient provider
import { routes } from './app/app.routes'; // ✅ Import routes

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes)], // ✅ Register routes
}).catch(err => console.error(err));