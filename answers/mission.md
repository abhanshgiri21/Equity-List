## Assumtions
```
> Looking at the data, we can ascertain that the activity_id is a primary key, and unique for each transaction.
> The date for each transaction represents datetime including miliseconds, which can help order transactions in a particular order.
> The balance shown in each transaction after adding/deducting the amount from previous transaction balance should result in balance of current transaction, that's how we can validate if a transaction is at correct place in the ledger in case the above two assumptions don't give us a unique set.
```
----
----

## Code Structure : 


```
├── index.js                  * Contains simple express API's to just return the 3 ledgers according to the api path.
|── data                      * Contains file to export API response data for different types of ledgers.
├── frontend
│   ├── src
│   │   ├── app
|   |   |   |── pipes         * Contains transaction description pipe to create transaction description
|   |   |   |── services      * Contains api service to call backend api's
|   |   |   |── ledger-entry  * Contains ledger entry component to render transactions page
```

----
----


## Code explanation: 
> To Simulate different API calls, I have added a dropdown on transaction page, where when any ledger is selected, it calls the API and renders that ledger after sorting and filtering.

----
----


>  `frontend\src\app\ledger-entry\ledger-entry.component.ts:L85` sortLedger method
```
This method  takes a ledger and then attempts to sort it via datetime of given transactions.
Once that is done, it goes through the ledger to check if each entry makes sense mathematically by adding/subtracting give amount from previous transaction and checking if the balance matches. If it doesn't, it tries to go through subsequent transaction that happened at the same datetime (because otherwise the transaction which happened after the give datetime are going to happen in future with respect to current transaction, so we cannot replace those in place of current transaction because that would not make sense chronologically with respect to datetime values), and then check if the amount/balance pair makes sense to come after last transaction, if any such transaction is found, that transaction is moved to current position, and current transaction is substituted at that position.
```

>  `frontend\src\app\ledger-entry\ledger-entry.component.ts:L73`  filterLedgerData method
```
This method takes the ledger and remove all the duplicate entries based on activity_id uniqueness.
```

