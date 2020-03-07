import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Transaction {
  email: string;
  phoneNumber: string;
  refNumber: string;
  amount: number;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class PesapalService {
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  amount = 0;

  constructor(private http: HttpClient) { }

  getUserInfo(firstName, lastName, email, phoneNo, amount) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNo;
    this.amount = amount;
  }

  redirectToPesapal() {
    const transaction: Transaction = {
      email: this.email,
      phoneNumber: this.phoneNumber,
      refNumber: 'ref01',
      amount: this.amount,
      type: 'MERCHANT'
    };
    console.log(transaction);
    return this.http.post<{url: string}>('http://localhost:3000/pesapalRedirect', transaction);
  }

}
