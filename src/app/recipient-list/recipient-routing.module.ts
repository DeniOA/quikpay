import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { RecipientListComponent } from './recipient-list.component';

const routes: Routes = [
  {
    path: 'recipient-list',
    component: RecipientListComponent,
    data: {
      title: 'Transfer'
    },
  },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipientRoutingModule { 




}
