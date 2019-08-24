import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel} from '@angular/forms';

import {  Router, ActivatedRoute } from '@angular/router';
import {  transferService } from './services/transfer.service';
import { HttpClient } from '@angular/common/http';

import {IRecipient } from './services/recipient';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
   
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #b0c4de;
  }
  .filled {
    color: #1e90ff;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  },

.col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 50% !important;
},

.form-inline .custom-select, .form-inline .input-group {
  width: auto;
  margin-left: 17rem;
  top: 1rem;
}


`]
})
export class TransferComponent implements OnInit {

  recipient;
  public banks: any[];

  constructor(http: HttpClient, private _transferService: transferService, private router: Router,private route: ActivatedRoute) {

    http.get<any[]>('https://api.paystack.co/bank').subscribe(
      (data: any) => {
        this.banks = data.data;
       console.log(this.banks);
        return this.banks;
      }
  );

   }


  createRecipient(recipientForm: NgForm){
    console.log(recipientForm.value);

    this.recipient = {
      type: recipientForm.value.type,
      name: recipientForm.value.name,
      account_number: recipientForm.value.account_number,
      bank_code: recipientForm.value.bank_code,
      currency: recipientForm.value.currency
    };
    this._transferService.newRecipient(this.recipient).subscribe(() => {
      alert('Recipient' +recipientForm.value.name+ ' was created');
      recipientForm.reset();
      this.router.navigate(['/recipient-list'])
    });

  }

  ngOnInit() {
  }


}
