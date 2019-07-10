import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailNoteComponent } from './components/detail-note/detail-note.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'note/:id',
        component: DetailNoteComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
