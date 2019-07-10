import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// interface
import { Note } from '../interfaces/Note';

@Injectable()

export class NoteService {

    constructor (
        private afs: AngularFirestore
    ) { 
        this.notesCollection = this.afs.collection('notes');
      }

    // data
    notesCollection: AngularFirestoreCollection<Note>;
    noteDoc: AngularFirestoreDocument<Note>;
    notes: Observable<Note[]>;
    note: Observable<Note>;

    // get note based on note id
    getNote(id: string): Observable<Note> {
        this.noteDoc = this.afs.doc<Note>(`notes/${id}`);
        this.note = this.noteDoc.snapshotChanges().pipe(map(action => {
        if(action.payload.exists === false) {
            return null;
        } else {
            const data = action.payload.data() as Note;
            data.id = action.payload.id;
            return data;
        }
        }));

        return this.note;
    }

    // get all user's notes
    getNotes(): Observable<Note[]> {
    
        this.notes = this.afs.collection('notes', ref => {
            // ordered notes
            let query : firebase.firestore.Query = ref;
                query = query.orderBy('create', 'desc')
            return query;

        })
        .snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Note;
                data.id = action.payload.doc.id;
                return data;
            });
        }));

        return this.notes;
    }

    // delete single note
    deleteNote(id) {
        this.notesCollection.doc(id).delete();
    }

    // get notes database
    noteDatabase(){
        return this.notesCollection
    }
}