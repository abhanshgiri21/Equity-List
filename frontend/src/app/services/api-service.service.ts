import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  domain = environment.apiUrl;
  simpleLedgerPath = `${this.domain}simpleLedger`;
  duplicateLedgerPath = `${this.domain}duplicateLedger`;
  complicatedLedgerPath = `${this.domain}complicatedLedger`;

  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  public getSimpleLedger() {
    return this.get(this.simpleLedgerPath);
  }

  public getDuplicateLedger() {
    return this.get(this.duplicateLedgerPath);
  }

  public getComplicatedLedger() {
    return this.get(this.complicatedLedgerPath);
  }
}
