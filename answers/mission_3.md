Write your email to Dr. Horrible here.

If the money is not showing up on the user's page. We first need to check if the transaction exists in our DB or not. If it exists, then we check each step that happens while showing transactions to user, to check where exactly does the transaction drop away.

#### 1. Steps to debug:
```
 - Check If our DB has any record for the said transaction. (We might need to ask the user about the date time of transaction, as well as exact amount to narrow down the results if the user has lots of similar transactions).

 - If the record exists, then we check out own api which sends transactions to the frontend, to see if its returning said transactions.
 - If the API is returning that transaction, then we check if the frontend is receiving the API response properly.
 - If it is, then we go through the frontend code and see where exactly is the transaction being dropped.
```

 #### 2. Answering the user

We can write the following email to user, admitting our mistake, showing that we fixed it, and making remedies for the user since this was issue from our side.

```
Subject: Apologies and Resolution for the Investment Issue

Dear Dr. Horrible,

I hope this email finds you well. I am writing to address the recent issue you encountered while attempting to invest in a startup through our platform. Firstly, I would like to sincerely apologize for the inconvenience and frustration this has caused you. We deeply regret the oversight and the impact it had on your investment.

After thoroughly investigating the matter, we have identified the root cause of the problem. It was a bug in our system that caused your investment to be mistakenly filtered out during the transaction history cleanup process. Although the amount you transferred was visible in the Bank's API, our code failed to properly recognize it, leading to the incorrect assumption that you had not wired the funds.

We acknowledge that this error on our part resulted in the unfortunate closure of the deal without your intended investment. Please accept our sincerest apologies for the significant inconvenience and disappointment this has caused you.

To rectify the situation, we are taking the following steps:

 - Reopening the Deal: We understand the importance of your investment and the opportunity you intended to pursue. In light of our mistake, we are reopening the deal to ensure that you can still participate if you wish to do so.

 - Priority Placement: Given the impact of our error on your investment, we will prioritize your position in the deal, ensuring that you receive the same terms and conditions as initially offered.

 - Dedicated Support: To assist you through this process, we will assign a dedicated support representative to ensure seamless communication and address any concerns or questions you may have.

Please be assured that we have taken immediate action to address the system bug and prevent any recurrence of similar issues in the future. We have thoroughly reviewed our internal processes and have put in place additional safeguards to enhance the reliability and accuracy of our transaction handling.

Once again, I want to express our sincerest apologies for the inconvenience and frustration you experienced. We value your trust in our platform, and we are committed to resolving this matter to your satisfaction. If there is anything else we can do to assist you or if you have any further questions, please do not hesitate to reach out to us directly.

Thank you for your understanding, and we look forward to working with you to rectify this situation promptly.

Kind regards,
Abhansh,
Senior Invester Relations Associate,
EquityList
```