import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerEntryComponent } from './ledger-entry.component';

describe('LedgerEntryComponent', () => {
  let component: LedgerEntryComponent;
  let fixture: ComponentFixture<LedgerEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LedgerEntryComponent]
    });
    fixture = TestBed.createComponent(LedgerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
