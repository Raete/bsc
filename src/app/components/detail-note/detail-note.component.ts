import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// interfaces
import { Note } from '../../interfaces/Note';

// services
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-detail-note',
  templateUrl: './detail-note.component.html',
  styleUrls: ['./detail-note.component.scss']
})
export class DetailNoteComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private noteService: NoteService,
    ) { 
        
    }
    // data
    id: string;

    note: Note = {
        id: '',
        title: '',
        info: '',
        create: '',
    }

    ngOnInit() {
        // get note id from route
        this.id = this.route.snapshot.params['id'];
        // get note data form firebase
        this.noteService.getNote(this.id).subscribe(note => {
            if(note) {
                this.note = note;
            }
        });
    }

}
