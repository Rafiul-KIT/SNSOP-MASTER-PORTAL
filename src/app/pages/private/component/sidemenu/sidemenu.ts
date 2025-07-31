import { CommonModule } from '@angular/common';
import { Component, effect, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Helper } from '../../../../services/helper';

@Component({
  selector: 'app-sidemenu',
  imports: [PanelMenu, BadgeModule, PanelMenuModule, CommonModule],
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.scss',
})
export class Sidemenu implements OnInit {
  showOnMobile: boolean = false;
  items: MenuItem[] = [];

  constructor(private helper: Helper) {
    effect(() => {
      this.showOnMobile = this.helper.showMenuOnMobile();
    });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'fas fa-home',
        routerLink: 'dashboard',
        routerLinkActiveOptions: 'active',
        items: [],
      },
      {
        label: 'Settings',
        icon: 'fas fa-screwdriver-wrench',
        items: [
          {
            label: 'GEO Location',
            icon: 'fas fa-globe',
            routerLink: 'settings/geo-location',
          },
          {
            label: 'Implementation Partners',
            icon: 'fas fa-users',
            routerLink: 'settings/partners',
          },
          {
            label: 'Creating Project',
            icon: 'fas fa-folder',
            routerLink: 'settings/create-project',
          },
          {
            label: 'Creating Sub Project',
            icon: 'fas fa-file',
            routerLink: 'settings/sub-project',
          },
          {
            label: 'Creating Payment Cycle',
            icon: 'fas fa-money-check-dollar',
            routerLink: 'settings/create-payment-cycle',
          },
        ],
      },
      {
        label: 'Beneficiary Management',
        icon: 'fas fa-cogs',
        items: [
          {
            label: 'New Registration',
            icon: 'fas fa-user-plus',
            routerLink: 'beneficiary/registration',
          },
          {
            label: 'Beneficiary List',
            icon: 'fas fa-list',
            routerLink: 'beneficiary/list',
          },
          {
            label: 'Import from Mobile',
            icon: 'fas fa-list',
            routerLink: 'beneficiary/import-from-mobile',
          },
          {
            label: 'Beneficiary Attendance',
            icon: 'fas fa-list',
            routerLink: 'beneficiary/attendance',
          },
          {
            label: 'Beneficiary ID Cards',
            icon: 'fas fa-list',
            routerLink: 'beneficiary/id-card',
          },
          {
            label: 'Job Card',
            icon: 'fas fa-list',
            routerLink: 'beneficiary/job-card',
          },
          {
            label: 'Work Progress',
            icon: 'fas fa-list',
            routerLink: 'beneficiary/work-progress',
          },
          {
            label: 'LIPW Export',
            icon: 'fas fa-list',
            routerLink: 'beneficiary/lipw-export',
          },
        ],
      },
      {
        label: 'Payment Management',
        icon: 'fas fa-dollar-sign',
        items: [
          {
            label: 'Creating Wage Request',
            icon: 'fas fa-plus',
            routerLink: 'payment/create-wage-request',
          },
          {
            label: 'Creating Payroll',
            icon: 'fas fa-file-circle-plus',
            routerLink: 'payment/create-payroll',
          },
          {
            label: 'Payroll Download',
            icon: 'fas fa-download',
            routerLink: 'payment/payroll-download',
          },
          {
            label: 'Sub Payroll',
            icon: 'fas fa-list',
            routerLink: 'payment/sub-payroll',
          },
          {
            label: 'Supplementary Payroll',
            icon: 'fas fa-list',
            routerLink: 'payment/supplementary-payroll',
          },
          {
            label: 'Payroll for Mobile Wallet',
            icon: 'fas fa-list',
            routerLink: 'payment/mobile-wallet-payroll',
          },
          {
            label: 'Payroll Reconcile',
            icon: 'fas fa-list',
            routerLink: 'payment/payroll-reconcile',
          },
        ],
      },
      {
        label: 'Reports',
        icon: 'fas fa-chart-line',
        items: [
          {
            label: 'Beneficiary Report',
            icon: 'fas fa-chart-bar',
            items: [
              {
                label: 'Summary',
                icon: 'fas fa-list',
                routerLink: 'report/beneficiary-summary',
              },
              {
                label: 'Details',
                icon: 'fas fa-list',
                routerLink: 'report/report-beneficiary-details',
              },
            ],
          },
          {
            label: 'Payment Report',
            icon: 'fas fa-chart-bar',
            items: [
              {
                label: 'Summary',
                icon: 'fas fa-list',
                routerLink: 'report/payment-summary',
              },
              {
                label: 'Details',
                icon: 'fas fa-list',
                routerLink: 'report/payment-details',
              },
              {
                label: 'Beneficiary Payment History',
                icon: 'fas fa-list',
                routerLink: 'report/beneficiary-payment-history',
              },
            ],
          },
        ],
      },
      {
        label: 'Monitoring & Evaluation',
        icon: 'fas fa-list-check',
        items: [
          {
            label: 'Cash Summary',
            icon: 'fas fa-list',
            routerLink: 'monitoring/cash-summary',
          },
          {
            label: 'Beneficiary Enrolment Summary',
            icon: 'fas fa-list',
            routerLink: 'monitoring/enrolment-summary',
          },
          {
            label: 'Key Monitoring Indicators',
            icon: 'fas fa-list',
            routerLink: 'monitoring/indicators',
          },
          {
            label: 'Results Framework',
            icon: 'fas fa-list',
            routerLink: 'monitoring/result-framework',
          },
          {
            label: 'Reports',
            icon: 'fas fa-chart-pie',
            routerLink: 'monitoring/report',
          },
        ],
      },
      {
        label: 'Technical Helpdesk',
        icon: 'fas fa-headset',
        items: [
          {
            label: 'Support Request',
            icon: 'fas fa-list',
            routerLink: 'helpdesk/support-request',
          },
          {
            label: 'Support Management',
            icon: 'fas fa-list',
            routerLink: 'helpdesk/support-management',
          },
          {
            label: 'Resolution',
            icon: 'fas fa-list',
            routerLink: 'helpdesk/resolution',
          },
          {
            label: 'Resolution Report',
            icon: 'fas fa-list',
            routerLink: 'helpdesk/resolution-report',
          },
        ],
      },
      {
        label: 'Grievance Management',
        icon: 'fas fa-headset',
        items: [
          {
            label: 'Non-GBV Grievances',
            icon: 'fas fa-list',
            routerLink: 'grievances/non-gbv',
          },
          {
            label: 'GBV Grievances',
            icon: 'fas fa-list',
            routerLink: 'grievances/gbv',
          },
          {
            label: 'Non-GBV Dashboard',
            icon: 'fas fa-list',
            routerLink: 'grievances/non-gbv-dashboard',
          },
          {
            label: 'GBV Dashboard',
            icon: 'fas fa-list',
            routerLink: 'grievances/gbv-dashboard',
          },
          {
            label: 'Grievances Status Report',
            icon: 'fas fa-list',
            routerLink: 'grievances/status-report',
          },
          {
            label: 'Excel Importing',
            icon: 'fas fa-list',
            routerLink: 'grievances/excel-importing',
          },
        ],
      },
      {
        label: 'Invoice Management',
        icon: 'fas fa-file-invoice',
        items: [
          {
            label: 'Invoice Requests',
            icon: 'fas fa-list',
            routerLink: 'invoice/request',
          },
          {
            label: 'Gage Paid & Invoice',
            icon: 'fas fa-list',
            routerLink: 'invoice/gage-paid',
          },
          {
            label: 'Payment Cyclewise Invoice Print',
            icon: 'fas fa-list',
            routerLink: 'invoice/cyclewise-invoice-print',
          },
        ],
      },
      {
        label: 'Deduplication/Adjudication',
        icon: 'fas fa-headset',
        routerLink: 'adjudication',
        items: [],
      },
      {
        label: 'User Management',
        icon: 'fas fa-users-cog',
        items: [
          {
            label: 'Register New User',
            icon: 'fas fa-user-plus',
            routerLink: 'user/create',
          },
          {
            label: 'Role List',
            icon: 'fas fa-user-secret',
            routerLink: 'user/role',
          },
          {
            label: 'User List',
            icon: 'fas fa-users',
            routerLink: 'user/list',
          },
        ],
      },
    ];
  }
}
