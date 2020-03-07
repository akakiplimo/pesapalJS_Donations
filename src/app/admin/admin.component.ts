import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {NgForm} from '@angular/forms';

import {TransactionRecords} from './transactionRecords';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private securityKey = 'random123';
  key: string;
  pesapalConsumerKey: string;
  pesapalConsumerSecret: string;

  userRecords = [];



  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getPesapalMetadata()
      .subscribe((key) => {
        this.pesapalConsumerKey = key.cKey;
        this.pesapalConsumerSecret = key.cSecret;
      });

    this.adminService.getPesapalTransactionRecords()
      .subscribe((data) => {
        console.log(data.message);
        console.log(data.documents);
        data.documents.forEach((record) => {
          this.userRecords.push({
            transactionID: record._id,
            email: record.email,
            phoneNumber: record.phoneNumber,
            refNumber: record.refNumber,
            amount: record.amount,
            type: record.type
          });
          console.log(this.userRecords);
        });

      });
  }

  checkSecurityKey() {
    return this.key === this.securityKey;
  }

  onSubmit(form: NgForm) {
    this.adminService.updatePesapalMetadata(form.value.pesapalConsumerKeyUpdated, form.value.pesapalConsumerSecretUpdated)
      .subscribe((data) => {
        this.pesapalConsumerKey = data.cKey;
        this.pesapalConsumerSecret = data.cSecret;
      });
    form.reset();

  }

}
