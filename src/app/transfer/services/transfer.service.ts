import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {  HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import {IRecipient} from './recipient';
import {ITransfer} from './transfer';



@Injectable()
export class transferService
 {

  options = {
       headers: new HttpHeaders({
        'Content-Type': 'application/json',
         'Authorization': 'Bearer sk_test_3df29e03db0a01e75e4026512cd51acd671f3b38',
       })
     };

      constructor( private http: HttpClient ) { 
        
      }

      newRecipient(recipient) {
        console.log(recipient);
       return this.http.post<IRecipient>('https://api.paystack.co/transferrecipient', recipient, this.options);

      }

      transferRecipient(transfer)  {
        console.log(transfer);
        return this.http.post<ITransfer>('https://api.paystack.co/transfer', transfer, this.options);
      }
     
      errorHandler(error:Response) {
        console.log(error);
        return throwError(error);
        
      }

     


    

   
    
}