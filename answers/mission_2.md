Write notes about your proposal for Mission 2 here.

>We need to add deposit and withdrawl functionality to our banking web application.
----
### Requirements: 
```
> Users should be able to withdraw money to another account.
> Users should be able to deposit money from other sources.
```

### Withdraw funds

#### Expectations

 - By having the destinations account number and IFSC code, users should be able to withdraw funds from their account into given destination account.
 - In case of having incorrect account details or invalid IFSC code, and error should be throws to inform users of incorrect information provided. Withdrawl should only be possible once correct information has been entered.
 - Users should have sufficient balance left in their accounts to withdraw.
 - User should not be able to withdraw funds more than the available funds value in their account at the time of transaction.

#### Describing UI

 - There should be a Navigation bar at the top. Under different options present there, there should be an `Account` Option.
 - On hovering over this Account option, a dropdown menu should open which contains `Withdraw funds` Option.
 - On clicking this Withdraw funds option, a new page should open asking user to input Account number and IFSC code.
 - If user has withdrawn funds in the past, any account stored in our DB should be shown in a List, which user should be able to select to directly withdraw funds to that account.

#### Withdrawl Flow

 - User hovers on `Account` section in Navigation bar, then clicks on `Withdraw funds`.
 - User select an Account from list of past account used on platform
  
OR
 - User enters Account Number and IFSC code, which are verified to be correct via Bank API.
 - Once the account is verified, then another prompt input box asks for the amount to be withdrawn.
 - The amount entered should be less than or equal to available account balance.
 - Then user clicks on Withdraw button, which send the request to bank servers to make the tranasaction.
 - User gets a sucess of error messages from backend server whether the transaction is successful or not.



### Deposit funds

#### Expectations

 - By having the source Net banking/ UPI Id, users should be able to withdraw funds from their account into given destination account.
 - In case of having invalid UPI Id, and error should be throws to inform users of incorrect information provided. Deposit should only be executed if correct account information is provided.
 - Users should not be able to deposit amount more than the set daily limit.

#### Describing UI

 - There should be a Navigation bar at the top. Under different options present there, there should be an `Account` Option.
 - On hovering over this Account option, a dropdown menu should open which contains `Deposit funds` option.
 - On clicking this Deposit funds option, a new page should open asking user to input UPI Id, or select Bank in case of Net Banking.
 - If user has deposited funds in the past, any UPI Id stored in our DB should be shown in a List, which user should be able to select to directly deposit funds to that account.

#### Withdrawl Flow

 - User hovers on `Account` section in Navigation bar, then clicks on `Deposit funds`.
 - User select an Account/ UPI Id from list of past account used on platform
  
OR
 - User selects Bank name from dropdown in case of Net banking.
 

 > UPI Id flow
  - User enters amount, if the amount is withing allowed limits, and button to send request is enabled.
  - Once user clicks on request button, a wait page is opened with a 5 minute timer, which shows the message : 
  - `Open your UPI app and accept the request to send funds.`
  - Once the user completed the transaction on UPI app, the callback for check API returns success, after which user is redirected to Home page and amount is added to user's balance.

> Net Banking flow
- User is shown the allowed limits for depositing funds, and a button is enabled to redirect user to bank website.
- After redirect, user inputs his login details on bank page, and does a transaction to deposit money.
- Once transaction is finished on bank site, the user is redirected to Application.
- On successfull callback on server, the account balance is updated and user is shown a success message, or on failure an error message that the transaction failed.

