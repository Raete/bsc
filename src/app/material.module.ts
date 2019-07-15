import { NgModule } from '@angular/core';

// angular material
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
    imports: [
        MatButtonModule, 
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
    ],

    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
    ],

    providers: [

    ],
})

export class MaterialModule { }