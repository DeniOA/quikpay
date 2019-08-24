import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, NgModel} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  Router, ActivatedRoute } from '@angular/router';
import {  transferService } from '../transfer/services/transfer.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .light-blue-backdrop {
      background-color: #5cb3fd;
    },
    @media (min-width: 768px){
      .col-md-4 {
          -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
          max-width: 50% !important;}
      },
      @media (min-width: 576px){
        .form-inline .custom-select, .form-inline .input-group {
          width: auto;
          margin-left: 17rem;
          top: 1rem;
        }
        }
  `]
})
export class RecipientListComponent implements OnInit {

  index;
  transfer;
  value;
  number;
  bank;
  
  public banks: any[];
  public recipient: any[];
  public paystackAmount: number;
  public showPaystack: boolean = false;
  public showModal: boolean = false;
  amount: number;

  tRef = '';
  result = '';

  modalData;
  name: any;
  form: NgForm;

  constructor( http: HttpClient, private _transferService: transferService, private router: Router,private route: ActivatedRoute, private modalService: NgbModal ) {

    let headers = new HttpHeaders()
    headers = headers.set('Authorization', 'Bearer sk_test_3df29e03db0a01e75e4026512cd51acd671f3b38')

    http.get<any[]>('https://api.paystack.co/transferrecipient', {headers: headers}).subscribe(
      (data: any) => {
        this.recipient = data.data;
       console.log(this.recipient);
        return this.recipient;
      }
  );

  http.get<any[]>('https://api.paystack.co/bank').subscribe(
    (data: any) => {
      this.banks = data.data;
     console.log(this.banks);
      return this.banks;
    }
);

   }

   initiateTransfer(transferForm: NgForm, longContent){
    console.log(transferForm.value);

    this.modalData = transferForm.value;

    this.transfer = {
      source: transferForm.value.source,
     amount: transferForm.value.amount,
      recipient: transferForm.value.recipient,
      account_number: this.number,
      bank_code: this.bank,
      currency: transferForm.value.currency
    };

    this.form = transferForm;
    this.openBackDropCustomClass(longContent);

    console.log(this.recipient);
  
  }
      transferNow(){
        this._transferService.transferRecipient(this.transfer).subscribe(() => {
          this.paystackAmount = (Number(this.transfer.amount)*100);
          this.tRef = ''+Math.floor((Math.random() * 1000000000) + 1);
          
          this.showPaystack = true;
         
          // alert("The form was submitted");
          this.form.reset();
        });
      }


  openBackDropCustomClass(longContent) {
    this.modalService.open(longContent, {backdropClass: 'light-blue-backdrop'});
  }

  sayHello() {
    alert('Transaction Successful' );
  }

  

  paymentCancel() {
    console.log('No payment times.');
    alert('Sorry, Payment failed ');
  }

  paymentDone(paymentData) {
    console.log('Payment Done');
    alert('Thank you!! Payment was Successful ');
    this.showPaystack = false;
  
  }

  selectedRecipient(value, transferForm:NgForm){
    console.log(value);
    this.index = this.recipient.findIndex(item=>item.recipient_code===transferForm.value.recipient);
    console.log(this.index);
    this.bank= this.recipient[this.index].details.bank_code;
    this.name= this.recipient[this.index].details.bank_name;
    
    this.number= this.recipient[this.index].details.account_number;
  }

  ngOnInit() {
  }

}
