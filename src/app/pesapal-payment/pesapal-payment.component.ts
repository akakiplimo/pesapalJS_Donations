import { Component, OnInit } from '@angular/core';
import {PesapalService} from '../services/pesapal.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  templateUrl: './pesapal-payment.component.html',
  selector: 'app-pesapal-payment',
  styleUrls: ['./pesapal-payment.component.css']
})
export class PesapalPaymentComponent implements OnInit {
    safeIframeLink: SafeResourceUrl;

  constructor(private pesapalService: PesapalService,
              private http: HttpClient,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.pesapalService.redirectToPesapal()
      .subscribe((link) => {
        this.safeIframeLink = this.sanitizer.bypassSecurityTrustResourceUrl(link.url);
      });
  }

}
