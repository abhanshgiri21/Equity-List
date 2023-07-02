import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedgerEntryComponent } from './ledger-entry/ledger-entry.component';
import { TransactionDescriptionPipe } from './pipes/transaction-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LedgerEntryComponent,
    TransactionDescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
