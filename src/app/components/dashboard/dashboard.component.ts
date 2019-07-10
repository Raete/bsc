import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// components
import { AddNoteComponent } from '../../components/add-note/add-note.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public  dialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  // add new list
  addNewNote(): void {
    this.dialog.open(AddNoteComponent, {
        // custom style (reset padding)
        panelClass: 'notes_custom_dialog_style', 
    });
}

}
