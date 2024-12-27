import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
    providers: [provideExperimentalZonelessChangeDetection()]  
    // This is an experimental feature introduced by Angular that allows you to enable zoneless change detection. Normally, Angular's change detection mechanism relies on Zone.js to track asynchronous operations (like HTTP requests, setTimeout, etc.). 
}).catch((err) => console.error(err));

