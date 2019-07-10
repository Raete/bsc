import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { DetailNoteComponent } from './components/detail-note/detail-note.component';

// angular material
import { MaterialModule } from './material.module';

// services
import { NoteService } from './services/note.service';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent,
        NotesListComponent,
        EditNoteComponent,
        AddNoteComponent,
        DetailNoteComponent,

    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebase, 'bsc-app'),
        AngularFirestoreModule,
    ],

    entryComponents: [
        AddNoteComponent,
        EditNoteComponent
    ],

    providers: [
        NoteService 
    ],
    
    bootstrap: [AppComponent]
})

export class AppModule { }
