import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// material design
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// interfaces
import { Note } from '../../interfaces/Note';

// services
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private thisDialog: MatDialogRef<EditNoteComponent>
  ) {
    this.id = data.id;
   }

  note: Note = {
    id: '',
    title: '',
    info: '',
    create: '',
}
id: string;

feedback: string;

  ngOnInit() {
      // get list id from route
    //  this.id = this.route.snapshot.params['id'];

      // get list data form firebase
      this.noteService.getNote(this.id).subscribe(note => {
          if(note) {
              this.note = note;
          }
      });
  }

  editNote(){

    if (this.note.title) {
        // update list data in database
        this.noteService.noteDatabase().doc(this.id).update({
            title: this.note.title,
            info: this.note.info
        })
        // close dialog
        this.thisDialog.close()
    } else {
        this.feedback = "Title is required."
    }
}

}
