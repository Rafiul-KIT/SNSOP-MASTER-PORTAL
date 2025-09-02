import { Routes } from '@angular/router';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { Private } from './pages/private/private';
import { Profile } from './pages/private/profile/profile';
import { SignIn } from './pages/auth/sign-in/sign-in';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Unauthorized } from './components/unauthorized/unauthorized';
import { authGuard } from './auth-guard';
import { routeGuard } from './route-guard';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { BeneficiaryList } from './pages/private/beneficiary/beneficiary-list/beneficiary-list';
import { BeneficiaryManage } from './pages/private/beneficiary/beneficiary-manage/beneficiary-manage';
import { BeneficiaryRegistration } from './pages/private/beneficiary/beneficiary-registration/beneficiary-registration';
import { ComingSoon } from './components/coming-soon/coming-soon';
import { BeneficiaryAttendance } from './pages/private/beneficiary/beneficiary-attendance/beneficiary-attendance';
import { BeneficiaryIdCard } from './pages/private/beneficiary/beneficiary-id-card/beneficiary-id-card';
import { BeneficiaryJobCard } from './pages/private/beneficiary/beneficiary-job-card/beneficiary-job-card';
import { Adjudication } from './pages/private/adjudication/adjudication';
import { GeoLocation } from './pages/private/settings/geo-location/geo-location';
import { Partners } from './pages/private/settings/partners/partners';
import { Project } from './pages/private/settings/project/project';
import { SubProject } from './pages/private/settings/sub-project/sub-project';
import { PaymentCycle } from './pages/private/settings/payment-cycle/payment-cycle';
import { MobileImport } from './pages/private/beneficiary/mobile-import/mobile-import';
import { LipwExport } from './pages/private/beneficiary/lipw-export/lipw-export';
import { WorkProgress } from './pages/private/beneficiary/work-progress/work-progress';
import { WageRequest } from './pages/private/payment/wage-request/wage-request';
import { CreatePayroll } from './pages/private/payment/create-payroll/create-payroll';
import { PayrollDownload } from './pages/private/payment/payroll-download/payroll-download';
import { SubPayroll } from './pages/private/payment/sub-payroll/sub-payroll';
import { SupplementaryPayroll } from './pages/private/payment/supplementary-payroll/supplementary-payroll';
import { MobileWalletPayroll } from './pages/private/payment/mobile-wallet-payroll/mobile-wallet-payroll';
import { PayrollReconcile } from './pages/private/payment/payroll-reconcile/payroll-reconcile';
import { BeneficiarySummary } from './pages/private/report/beneficiary-summary/beneficiary-summary';
import { PaymentSummary } from './pages/private/report/payment-summary/payment-summary';
import { PaymentDetails } from './pages/private/report/payment-details/payment-details';
import { BeneficiaryPaymentHistory } from './pages/private/report/beneficiary-payment-history/beneficiary-payment-history';
import { CashSummary } from './pages/private/monitoring/cash-summary/cash-summary';
import { EnrolmentSummary } from './pages/private/monitoring/enrolment-summary/enrolment-summary';
import { KeyIndicators } from './pages/private/monitoring/key-indicators/key-indicators';
import { ResultsFramework } from './pages/private/monitoring/results-framework/results-framework';
import { Reports } from './pages/private/monitoring/reports/reports';
import { Resolution } from './pages/private/helpdesk/resolution/resolution';
import { ResolutionReport } from './pages/private/helpdesk/resolution-report/resolution-report';
import { SupportRequest } from './pages/private/helpdesk/support-request/support-request';
import { SupportManagement } from './pages/private/helpdesk/support-management/support-management';
import { NonGbv } from './pages/private/grievances/non-gbv/non-gbv';
import { Gbv } from './pages/private/grievances/gbv/gbv';
import { GbvDashboard } from './pages/private/grievances/gbv-dashboard/gbv-dashboard';
import { NonGbvDashboard } from './pages/private/grievances/non-gbv-dashboard/non-gbv-dashboard';
import { StatusReport } from './pages/private/grievances/status-report/status-report';
import { ExcelImport } from './pages/private/grievances/excel-import/excel-import';
import { Request } from './pages/private/invoice/request/request';
import { GagePaid } from './pages/private/invoice/gage-paid/gage-paid';
import { CyclewisePrint } from './pages/private/invoice/cyclewise-print/cyclewise-print';
import { UserList } from './pages/private/users/user-list/user-list';
import { Register } from './pages/private/users/register/register';
import { RoleManagement } from './pages/private/users/role-management/role-management';
import { BeneficiaryDetails } from './pages/private/beneficiary/beneficiary-details/beneficiary-details';
import { ReportBeneficiaryDetails } from './pages/private/report/report-beneficiary-details/report-beneficiary-details';
import { BeneficiaryMigration } from './pages/private/beneficiary/beneficiary-migration/beneficiary-migration';
import { LookupSubProject } from './pages/private/payment/lookup-sub-project/lookup-sub-project';
import { BeneficiaryEditApproval } from './pages/private/approval/beneficiary-edit-approval/beneficiary-edit-approval';
import { BeneficiaryMigrateApproval } from './pages/private/approval/beneficiary-migrate-approval/beneficiary-migrate-approval';
import { BeneficiaryArchiveApproval } from './pages/private/approval/beneficiary-archive-approval/beneficiary-archive-approval';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [authGuard],
    children: [
      {
        path: 'sign-in',
        component: SignIn,
      },
      { path: 'forgot-password', component: ForgotPassword },
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    ],
  },
  {
    path: 'private',
    component: Private,
    canActivate: [routeGuard],
    children: [
      { path: 'private', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'profile', component: Profile },
      {
        path: 'settings',
        children: [
          { path: 'geo-location', component: GeoLocation },
          { path: 'partners', component: Partners },
          { path: 'create-project', component: Project },
          { path: 'sub-project', component: SubProject },
          { path: 'create-payment-cycle', component: PaymentCycle },
          { path: '', pathMatch: 'full', redirectTo: 'geo-location' },
        ],
      },
      {
        path: 'beneficiary',
        children: [
          { path: 'list', component: BeneficiaryList },
          { path: 'registration', component: BeneficiaryRegistration },
          { path: 'attendance', component: BeneficiaryAttendance },
          { path: 'id-card', component: BeneficiaryIdCard },
          { path: 'job-card', component: BeneficiaryJobCard },
          { path: 'import-from-mobile', component: MobileImport },
          { path: 'work-progress', component: WorkProgress },
          { path: 'lipw-export', component: LipwExport },
          { path: 'edit/:bid', component: BeneficiaryManage },
          { path: 'details/:bid', component: BeneficiaryDetails },
          { path: 'migration/:bid', component: BeneficiaryMigration },
          { path: '', pathMatch: 'full', redirectTo: 'list' },
        ],
      },
      {
        path: 'payment',
        children: [
          { path: 'create-wage-request', component: WageRequest },
          { path: 'create-payroll', component: CreatePayroll },
          { path: 'payroll-download', component: PayrollDownload },
          { path: 'sub-payroll', component: SubPayroll },
          { path: 'supplementary-payroll', component: SupplementaryPayroll },
          { path: 'mobile-wallet-payroll', component: MobileWalletPayroll },
          { path: 'payroll-reconcile', component: PayrollReconcile },
          { path: 'lookup-sub-project', component: LookupSubProject },
          { path: '', pathMatch: 'full', redirectTo: 'create-wage-request' },
        ],
      },
      {
        path: 'report',
        children: [
          { path: 'beneficiary-summary', component: BeneficiarySummary },
          { path: 'report-beneficiary-details', component: ReportBeneficiaryDetails },
          { path: 'payment-summary', component: PaymentSummary },
          { path: 'payment-details', component: PaymentDetails },
          { path: 'beneficiary-payment-history', component: BeneficiaryPaymentHistory },
          { path: '', pathMatch: 'full', redirectTo: 'beneficiary-summary' },
        ],
      },
      {
        path: 'monitoring',
        children: [
          { path: 'cash-summary', component: CashSummary },
          { path: 'enrolment-summary', component: EnrolmentSummary },
          { path: 'indicators', component: KeyIndicators },
          { path: 'result-framework', component: ResultsFramework },
          { path: 'report', component: Reports },
          { path: '', pathMatch: 'full', redirectTo: 'cash-summary' },
        ],
      },
      {
        path: 'helpdesk',
        children: [
          { path: 'support-request', component: SupportRequest },
          { path: 'support-management', component: SupportManagement },
          { path: 'resolution', component: Resolution },
          { path: 'resolution-report', component: ResolutionReport },
          { path: '', pathMatch: 'full', redirectTo: 'support-request' },
        ],
      },
      {
        path: 'grievances',
        children: [
          { path: 'non-gbv', component: NonGbv },
          { path: 'gbv', component: Gbv },
          { path: 'non-gbv-dashboard', component: NonGbvDashboard },
          { path: 'gbv-dashboard', component: GbvDashboard },
          { path: 'status-report', component: StatusReport },
          { path: 'excel-importing', component: ExcelImport },
          { path: '', pathMatch: 'full', redirectTo: 'non-gbv' },
        ],
      },
      {
        path: 'invoice',
        children: [
          { path: 'request', component: Request },
          { path: 'gage-paid', component: GagePaid },
          { path: 'cyclewise-invoice-print', component: CyclewisePrint },
          { path: '', pathMatch: 'full', redirectTo: 'request' },
        ],
      },
      { path: 'adjudication', component: Adjudication },
      {
        path: 'user',
        children: [
          { path: 'list', component: UserList },
          { path: 'create', component: Register },
          { path: 'role', component: RoleManagement },
          { path: '', pathMatch: 'full', redirectTo: 'list' },
        ],
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'approval',
        children: [
          { path: 'beneficiary-edit-approval', component: BeneficiaryEditApproval },
          { path: 'beneficiary-migrate-approval', component: BeneficiaryMigrateApproval },
          { path: 'beneficiary-archive-approval', component: BeneficiaryArchiveApproval },
          { path: '', pathMatch: 'full', redirectTo: 'beneficiary-edit-approval' },
        ],
      },
    ],
  },

  { path: 'unauthorized', component: Unauthorized },
  { path: '', pathMatch: 'full', redirectTo: 'auth/sign-in' },
  {
    component: PageNotFound,
    path: '**',
  },
];
