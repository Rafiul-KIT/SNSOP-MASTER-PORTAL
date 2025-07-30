import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// ✅ PrimeNG modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';

import { MessageService, ConfirmationService } from 'primeng/api';

interface Location {
  name: string;
  code: string;
}

interface Beneficiary {
  householdNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  age: number;
  phoneNumber: string;
  state: string;
  county: string;
  payam: string;
  boma: string;
}

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.html',
  styleUrls: ['./beneficiary-list.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    PaginatorModule,
    BreadcrumbModule,
    InputTextModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class BeneficiaryList implements OnInit {
  searchForm!: FormGroup;
  states: Location[] = [];
  counties: Location[] = [];
  payams: Location[] = [];
  bomas: Location[] = [];
  beneficiaries: Beneficiary[] = [];
  breadcrumbItems: any[] = [];
  breadcrumbHome: any;
  currentPage = 0;
  pageSize = 10;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadLocations();
    this.loadBeneficiaries();
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/' };
    this.breadcrumbItems = [{ label: 'Beneficiaries' }];
  }

  initForm() {
    this.searchForm = this.fb.group({
      householdNumber: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      phoneNumber: [''],
      state: [null],
      county: [null],
      payam: [null],
      boma: [null]
    });
  }

  loadLocations() {
    this.states = [
      { name: 'Central Equatoria', code: 'CE' },
      { name: 'Eastern Equatoria', code: 'EE' },
      { name: 'Jonglei', code: 'JG' },
      { name: 'Unity', code: 'UN' },
      { name: 'Upper Nile', code: 'UN2' }
    ];

    this.counties = [
      { name: 'Juba', code: 'JB' },
      { name: 'Yei', code: 'YE' },
      { name: 'Terekeka', code: 'TR' }
    ];

    this.payams = [
      { name: 'Munuki', code: 'MN' },
      { name: 'Kator', code: 'KT' },
      { name: 'Juba Town', code: 'JT' }
    ];

    this.bomas = [
      { name: 'Gudele', code: 'GD' },
      { name: 'Hai Thoura', code: 'HT' },
      { name: 'Nyakuron', code: 'NK' }
    ];
  }

  loadBeneficiaries() {
    this.beneficiaries = [
      {
        householdNumber: 'HH001',
        firstName: 'John',
        middleName: 'Peter',
        lastName: 'Doe',
        gender: 'Male',
        age: 35,
        phoneNumber: '+211912345678',
        state: 'Central Equatoria',
        county: 'Juba',
        payam: 'Munuki',
        boma: 'Gudele'
      },
      {
        householdNumber: 'HH002',
        firstName: 'Jane',
        middleName: 'Mary',
        lastName: 'Smith',
        gender: 'Female',
        age: 28,
        phoneNumber: '+211923456789',
        state: 'Central Equatoria',
        county: 'Juba',
        payam: 'Kator',
        boma: 'Nyakuron'
      },
      {
        householdNumber: 'HH003',
        firstName: 'David',
        middleName: '',
        lastName: 'Johnson',
        gender: 'Male',
        age: 42,
        phoneNumber: '+211934567890',
        state: 'Eastern Equatoria',
        county: 'Yei',
        payam: 'Juba Town',
        boma: 'Hai Thoura'
      }
    ];
  }

  get paginatedBeneficiaries(): Beneficiary[] {
    const start = this.currentPage * this.pageSize;
    return this.beneficiaries.slice(start, start + this.pageSize);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.pageSize = event.rows;
  }

  searchBeneficiaries() {
    this.messageService.add({
      severity: 'info',
      summary: 'Search',
      detail: 'Search performed with the provided criteria'
    });
    console.log('Search criteria:', this.searchForm.value);
  }

  resetForm() {
    this.searchForm.reset();
  }

  editBeneficiary(beneficiary: Beneficiary) {
    this.messageService.add({
      severity: 'info',
      summary: 'Edit',
      detail: `Editing beneficiary ${beneficiary.firstName} ${beneficiary.lastName}`
    });
  }

  deleteBeneficiary(beneficiary: Beneficiary) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${beneficiary.firstName} ${beneficiary.lastName}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.beneficiaries = this.beneficiaries.filter(b => b.householdNumber !== beneficiary.householdNumber);
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          detail: 'Beneficiary deleted successfully'
        });
      }
    });
  }

  getFullName(beneficiary: Beneficiary): string {
    return [beneficiary.firstName, beneficiary.middleName, beneficiary.lastName].filter(Boolean).join(' ');
  }
}
