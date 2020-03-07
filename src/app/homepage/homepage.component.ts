import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {PesapalService} from '../services/pesapal.service';
import {Router} from '@angular/router';
import {Donation} from "./donation";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private pesapalService: PesapalService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(donationForm: NgForm) {
    if (donationForm.invalid) {
      return;
    }
    const donation: Donation = {
      name: donationForm.value.firstName + ' ' + donationForm.value.lastName,
      phoneNo: donationForm.value.phoneNo,
      email: donationForm.value.email,
      amount: donationForm.value.amount
    };
    console.log(donation);
    this.pesapalService.getUserInfo(donationForm.value.firstName, donationForm.value.lastName,
      donationForm.value.email, donationForm.value.phoneNo, donationForm.value.amount);

    this.router.navigate(['pesapal']);
  }

}
