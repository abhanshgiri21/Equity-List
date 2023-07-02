import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionDescription',
})
export class TransactionDescriptionPipe implements PipeTransform {
  transform(ledger: any): string {
    let transactionType = ledger.type;
    let transactionDescription = '';
    switch (transactionType) {
      case 'DEPOSIT': {
        transactionDescription = `${ledger.method} Deposit${
          ledger.source['description']
            ? ' from ' + ledger.source['description']
            : ''
        }`;
        break;
      }
      case 'INVESTMENT': {
        transactionDescription = `${ledger.destination['type']} Investment in ${ledger.destination['description']}`;
        break;
      }
      case 'REFUND': {
        transactionDescription = `${ledger.destination['type']} Refund from ${ledger.destination['description']}`;
        break;
      }
      case 'WITHDRAWAL': {
        transactionDescription = `${ledger.method} Withdrawl from ${ledger.destination['description']}`;
        break;
      }
      case 'TRANSFER': {
        transactionDescription =
          ledger.amount >= 0
            ? `Transfer from ${ledger.source['description']}`
            : `${ledger.destination['description']}`;
        break;
      }
      default:
        transactionDescription = ledger.type;
    }

    return transactionDescription;
  }
}
