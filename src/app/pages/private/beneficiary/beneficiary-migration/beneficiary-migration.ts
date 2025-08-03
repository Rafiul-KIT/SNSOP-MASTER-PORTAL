import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-beneficiary-migration',
    standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    BreadcrumbModule,
    DropdownModule,
    InputTextModule
  ],
  templateUrl: './beneficiary-migration.html',
  styleUrl: './beneficiary-migration.scss'
})
export class BeneficiaryMigration {
  isLoading = false;
  items = [
    { label: 'Beneficiary List', icon: 'fas fa-users me-2', routerLink: '/private/beneficiary/list' },
    { label: 'Migrate Beneficiary', icon: 'fas fa-user-pen me-2' }
  ];
  home = { icon: 'fas fa-home me-2', routerLink: '/' };

  beneficiaryForm!: FormGroup;
  stateList = [{ id: 1, name: 'Juba' }, { id: 2, name: 'Wau' }];
  countyList = [{ id: 1, name: 'County A' }, { id: 2, name: 'County B' }];
  payamList = [{ id: 1, name: 'Payam A' }, { id: 2, name: 'Payam B' }];
  bomaList = [{ id: 1, name: 'Boma A' }, { id: 2, name: 'Boma B' }];


beneficiaryDetails: any;
beneficiaryPhoto = 'images/dummyHuman.jpg';
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.initializeDemoData();
    this.beneficiaryForm = this.fb.group({
      state: [''],
      county: [''],
      payam: [''],
      boma: [''],
      gpsLat: [''],
      gpsLong: [''],
    });

  }

  initializeDemoData(): void{
        this.beneficiaryDetails = {
      applicationId: 'HH001',
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      phone: '123-456-7890',
      
      address: {
        state: 'Central Equatoria',
        county: 'Juba',
        payam: 'Munuki',
        boma: 'Gudele',
        lat: '4.8517',
        lon: '31.5822'
      }
    };
  }

  onSubmit() {
    if (this.beneficiaryForm.valid) {
      console.log('Form submitted:', this.beneficiaryForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  }

}
