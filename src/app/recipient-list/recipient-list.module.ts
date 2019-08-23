import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipientRoutingModule } from './recipient-routing.module';
import { RecipientListComponent } from './recipient-list.component';
import { transferService } from '../transfer/services/transfer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular4PaystackModule } from 'angular4-paystack';


@NgModule({
  declarations: [
    RecipientListComponent
  ],
  imports: [
    CommonModule,
    RecipientRoutingModule,
    NgbModule,
    FormsModule,
    Angular4PaystackModule
    
  ],
  providers: [transferService]
})
export class RecipientListModule { }
