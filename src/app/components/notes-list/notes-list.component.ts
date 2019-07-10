import { Component, OnInit } from '@angular/core';

// material design
import { MatDialog, MatDialogConfig } from '@angular/material';
// interfaces
import { Note } from '../../interfaces/Note';
// components
import { EditNoteComponent } from '../../components/edit-note/edit-note.component';
// services
import { NoteService } from '../../services/note.service';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss']
})

export class NotesListComponent implements OnInit {

    constructor(
        private noteService: NoteService,
        public  dialog: MatDialog,
    ) { }

    // data    
    notes:any = [];
    note: Note = {
        id: '',
        title: '',
        info: '',
        create: '',
    };
        
    feedback: string;

    ngOnInit() {
        this.noteService.getNotes().subscribe(notes => {
            this.notes = notes;
        })
    }

    // open edit dialog with note id
    openEditDialog(id:string) {

        const dialogConfig = new MatDialogConfig();
        dialogConfig.panelClass = 'notes_custom_dialog_style' 
        dialogConfig.data = {
            id: id,
        };

        this.dialog.open(EditNoteComponent, dialogConfig);

    }

    // delete single note
    deleteNote(id:string) { 

        this.noteService.deleteNote(id);
        this.notes = this.notes.filter(item =>{
            return item.id != id
        })
        
    }

}
