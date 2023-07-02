import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-ledger-entry',
  templateUrl: './ledger-entry.component.html',
  styleUrls: ['./ledger-entry.component.css'],
})
export class LedgerEntryComponent {
  ledgers: any = [];
  balance: Number = 0;
  ledgerSelectValues = [
    { id: 'complicatedLedger', name: 'Complicated Ledger' },
    { id: 'simpleLedger', name: 'Simple Ledger' },
    { id: 'duplicateLedger', name: 'Duplicate Ledger' },
  ];
  constructor(public apiService: ApiServiceService) {
    this.apiService = apiService;
    // this.getSimpleLedger();\
    this.getComplicatedLedger();
  }

  selectorChanged(event: any) {
    const ledgerType = event.target.value;
    switch (ledgerType) {
      case 'simpleLedger':
        this.getSimpleLedger();
        break;
      case 'duplicateLedger':
        this.getDuplicateLedger();
        break;
      case 'complicatedLedger':
        this.getComplicatedLedger();
        break;
    }
  }

  getSimpleLedger() {
    this.apiService.getSimpleLedger().subscribe((data: any) => {
      this.ledgers = this.prepareLedgerData(data);
      this.updateBalance();
    });
  }

  getDuplicateLedger() {
    this.apiService.getDuplicateLedger().subscribe((data: any) => {
      this.ledgers = this.prepareLedgerData(data);
      this.updateBalance();
    });
  }

  getComplicatedLedger() {
    this.apiService.getComplicatedLedger().subscribe((data: any) => {
      this.ledgers = this.prepareLedgerData(data);
      this.updateBalance();
    });
  }

  updateBalance() {
    this.balance = this.ledgers[this.ledgers.length - 1].balance;
  }

  // Filter and sort ledger data, as well as add appropriate descriptions to ledgers
  prepareLedgerData(data: any) {
    data = this.filterLedgerData(data);

    data = this.sortLedgerData(data);

    return data;
  }

  // Filter ledger data by removing duplicate ledgers
  filterLedgerData(ledgerData: any) {
    let activityIdTally: any = new Set();
    return ledgerData.filter((ledgerEntry: any) => {
      return (
        !activityIdTally.has(ledgerEntry['activity_id']) &&
        activityIdTally.add(ledgerEntry['activity_id'])
      );
    });
  }

  // Sort ledger data according to date, if date time is exactly same, Then show ledger entries in the order they result in valid
  // transactino. i.e. the balance trail makes sense.
  sortLedgerData(ledgerData: any) {
    ledgerData.sort((first: any, second: any) => {
      let firstDate = new Date(first.date);
      let secondDate = new Date(second.date);

      return firstDate < secondDate ? -1 : 1;
    });

    for (let i = 1; i < ledgerData.length; i++) {
      let balance = ledgerData[i - 1].balance + ledgerData[i].amount;

      if (balance != ledgerData[i].balance) {
        let j = i + 1;
        while (ledgerData[i].date == ledgerData[j].date) {
          let balance = ledgerData[i - 1].balance + ledgerData[j].amount;
          if (balance == ledgerData[j].balance) {
            [ledgerData[i], ledgerData[j]] = [ledgerData[j], ledgerData[i]];
            break;
          }
          j++;
        }
      }
    }

    return ledgerData;
  }
}
