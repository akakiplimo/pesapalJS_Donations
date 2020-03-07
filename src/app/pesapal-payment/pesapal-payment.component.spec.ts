import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesapalPaymentComponent } from './pesapal-payment.component';

describe('PesapalPaymentComponent', () => {
  let component: PesapalPaymentComponent;
  let fixture: ComponentFixture<PesapalPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesapalPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesapalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
