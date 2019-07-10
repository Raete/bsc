import { Component, ViewChild  } from '@angular/core';
// material design
import { MatDialogRef } from '@angular/material';
// interfaces
import { Note } from '../../interfaces/Note';
// services
import { NoteService } from '../../services/note.service';

@Component({
    selector: 'app-add-note',
    templateUrl: './add-note.component.html',
    styleUrls: ['./add-note.component.scss']
})

export class AddNoteComponent {

    constructor(
        private noteService: NoteService,
        private thisDialog: MatDialogRef<AddNoteComponent>
    ) { }


    // data
    note: Note = {
        id: '',
        title: '',
        info: '',
        create: '',
    }

    feedback: string;

    @ViewChild('noteForm') form: any;

    // add new list and store in database
    addNewNote() {
        
        if (this.note.title) {
            // get data from form
            this.noteService.noteDatabase().add({
                id: this.note.id,
                title: this.note.title,
                info: this.note.info,
                create: Date.now()
            })
            // close dialog
            this.thisDialog.close()

        } else {
            this.feedback = "Title is required."
        }
        // reset list title
        this.note.title = ''
    }

}
