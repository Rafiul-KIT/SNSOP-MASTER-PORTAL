import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';


@Component({
  standalone: true,
  selector: 'app-beneficiary-details',
  templateUrl: './beneficiary-details.html',
  styleUrl: './beneficiary-details.scss',
  imports: [
    CommonModule,
    TabViewModule,
    AccordionModule,
    BreadcrumbModule,
    TooltipModule,
    TableModule,
    ScrollPanelModule
  ]
})
export class BeneficiaryDetails implements OnInit {
  isLoading = true;
  beneficiaryPhoto = 'images/dummyHuman.jpg';
  alternate1Photo = 'images/dummyHuman.jpg';
  alternate2Photo = 'images/dummyHuman.jpg';
  finger = 'images/tick.jpg';

  beneficiaryDetails: any = null;
  rightFingers: any[] = [];
  leftFingers: any[] = [];
  breadcrumbItems: any[] = [];
  breadcrumbHome: any;

  ngOnInit()  {
      this.initializeDemoData();
      this.isLoading = false;
    
    this.breadcrumbHome = { icon: 'fas fa-home', routerLink: '/private' };
    this.breadcrumbItems = [{ label: 'Beneficiary Details' }];
  }

  initializeDemoData(): void {
    this.beneficiaryDetails = {
      applicationId: 'HH001',
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      phone: '123-456-7890',
      household: {
        incomeSource: 'Farming',
        monthlyIncome: '500 SSP',
        selectionCriteria: 'LIPW',
        selectionReasons: ['Youth-headed household', 'No fixed income'],
        size: 5,
        female: 2,
        male: 3,
        disability: 1,
        chronicallyIll: 1,
        memberReadWrite: 2,
        isReadWrite: true
      },
      address: {
        state: 'Central Equatoria',
        county: 'Juba',
        payam: 'Munuki',
        boma: 'Gudele',
        lat: '4.8517',
        lon: '31.5822'
      },
      alternatePayees: [
        {
          name: 'Mary Thomas',
          age: 40,
          gender: 'Female',
          nationalId: 'ALT123',
          phone: '0987654321',
          documentType: 'National ID',
          photo: 'assets/dummy.png'
        }
      ],
      nominees: [
        { name: 'Jane Doe', age: 20, gender: 'Female', relation: 'Daughter' },
        { name: 'Alex Smith', age: 22, gender: 'Male', relation: 'Son' }
      ]
    };

    this.rightFingers = [
      { label: 'Thumb', image: 'images/tick.jpg', tooltip: 'Right Thumb' },
      { label: 'Index', image: 'images/tick.jpg', tooltip: 'Right Index' },
      { label: 'Middle', image: 'images/tick.jpg', tooltip: 'Right Middle' },
      { label: 'Ring', image: 'images/tick.jpg', tooltip: 'Right Ring' },
      { label: 'Little', image: 'images/tick.jpg', tooltip: 'Right Little' }
    ];

    this.leftFingers = [
      { label: 'Thumb', image: 'images/tick.jpg', tooltip: 'Left Thumb' },
      { label: 'Index', image: 'images/tick.jpg', tooltip: 'Left Index' },
      { label: 'Middle', image: 'images/tick.jpg', tooltip: 'Left Middle' },
      { label: 'Ring', image: 'images/tick.jpg', tooltip: 'Left Ring' },
      { label: 'Little', image: 'images/tick.jpg', tooltip: 'Left Little' }
    ];
  }
}
