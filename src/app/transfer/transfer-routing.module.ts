import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';
import { Routes,RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'transfer',
    component: TransferComponent,
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
export class TransferRoutingModule { }
