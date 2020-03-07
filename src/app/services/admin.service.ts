import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// tslint:disable-next-line:class-name
class keyData {
  consumerKey: string;
  consumerSecret: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  updatePesapalMetadata(consumerKey, consumerSecret) {
    const keys: keyData = {consumerKey, consumerSecret};
    return this.http.post<{cKey: string, cSecret: string}>('http://localhost:3000/addKeys', keys);
  }

  getPesapalMetadata() {
    return this.http.get<{cKey: string, cSecret: string}>('http://localhost:3000/getKeys');
  }

  getPesapalTransactionRecords() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<{message: string, documents: any}>('http://localhost:3000/getPesapalTransactionRecords');
  }
}
