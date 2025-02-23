import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note, NoteService } from '../note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  noteForm: FormGroup;
  editing: boolean = false;
  currentNoteId: number | null = null;

  constructor(private noteService: NoteService, private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: ['']
    });
  }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
    });
  }

  onSubmit() {
    if (this.noteForm.invalid) {
      return;
    }

    const note: Note = {
      title: this.noteForm.value.title,
      content: this.noteForm.value.content
    };

    if (this.editing && this.currentNoteId !== null) {
      note.id = this.currentNoteId;
      this.noteService.updateNote(note).subscribe(() => {
        this.resetForm();
        this.loadNotes();
      });
    } else {
      this.noteService.createNote(note).subscribe(() => {
        this.resetForm();
        this.loadNotes();
      });
    }
  }

  editNote(note: Note) {
    this.editing = true;
    this.currentNoteId = note.id!;
    this.noteForm.patchValue({
      title: note.title,
      content: note.content
    });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }

  resetForm() {
    this.editing = false;
    this.currentNoteId = null;
    this.noteForm.reset();
  }
}
