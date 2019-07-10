import { NgModule } from '@angular/core';

// angular material
import { MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';



@NgModule({
    imports: [
        MatButtonModule, 
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatListModule
    ],

    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatListModule
    ],

    providers: [
        
    ],
})

export class MaterialModule { }