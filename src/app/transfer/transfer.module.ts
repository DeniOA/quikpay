import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ShoppingCartModule} from 'ng-shopping-cart';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';
import { transferService } from './services/transfer.service';

@NgModule({
  declarations: [TransferComponent],
  imports: [
    CommonModule,
    FormsModule,
    TransferRoutingModule,
    NgbModule,
    ShoppingCartModule
  ],
  providers: [transferService]
})
export class TransferModule { }
