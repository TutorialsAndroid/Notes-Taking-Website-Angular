import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';

export const routes: Routes = [
  { path: '', component: NotesComponent }, // Default route
  { path: 'notes', component: NotesComponent },
];
