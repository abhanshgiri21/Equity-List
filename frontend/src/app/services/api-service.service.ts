import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  domain = 'http://localhost:3000/';
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
