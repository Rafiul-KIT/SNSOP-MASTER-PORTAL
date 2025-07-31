import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBeneficiaryDetails } from './report-beneficiary-details';

describe('ReportBeneficiaryDetails', () => {
  let component: ReportBeneficiaryDetails;
  let fixture: ComponentFixture<ReportBeneficiaryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportBeneficiaryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportBeneficiaryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
