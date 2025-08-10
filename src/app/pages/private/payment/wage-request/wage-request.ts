import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Breadcrumb } from 'primeng/breadcrumb';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Button } from 'primeng/button';

type SupportType = 'LIPW' | 'DIS';

@Component({
  selector: 'wage-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Breadcrumb, Button, BreadcrumbModule],
  templateUrl: './wage-request.html',
})
export class WageRequest implements OnInit, OnDestroy {
  form: FormGroup;

  paymentCycles = [
    { label: 'Payment Cycle 1', value: 1 },
    { label: 'Payment Cycle 2', value: 2 },
    { label: 'Payment Cycle 3', value: 3 },
  ];

  /** Current supportType from query param */
  supportType: SupportType = 'LIPW';
  statusMsg: string | null = null;
  breadCrumbItems: any[] = [];
  breadcrumbHome: any;

  private sub?: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      projectName: [''],
      workCode: [''],
      approvedDate: [null],
      wageRateUsd: [null, [Validators.min(0)]],
      fromDate: [null],
      toDate: [null],
      paymentCycle: [1, Validators.required],

      state: [''],
      county: [''],
      payam: [''],
      bomaName: [''],

      supportType: ['LIPW', Validators.required],
    });
  }

  ngOnInit(): void {
    // Subscribe to query param changes (works even when navigating between LIPW<->DIS on same path)
    this.sub = this.route.queryParamMap.subscribe((qp) => {
      const raw = (qp.get('program') || '').toUpperCase(); // Use 'program' as the query param name
      const st = raw === 'DIS' ? 'DIS' : 'LIPW'; // Default to 'LIPW' if missing or invalid
      this.applySupportType(st);

      // Breadcrumb setup
      this.breadcrumbHome = { icon: 'fas fa-home', routerLink: '/private' };
      this.breadCrumbItems = [{ label: 'Wage Request' }];
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /** Centralized place to apply UI/logic based on support type */
  private applySupportType(st: SupportType): void {
    this.supportType = st;
    this.form.patchValue({ supportType: st });

    // Example: tweak defaults or show/hide fields per type
    if (st === 'LIPW') {
      this.statusMsg = 'LIPW mode';
    } else {
      this.statusMsg = 'DIS mode';
    }
  }

  onLookup(): void {
    this.router.navigate(['/private/payment/lookup-sub-project']);
  }

  onSearch(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.statusMsg = 'Please check required fields.';
      return;
    }
    const payload = this.form.getRawValue();
    console.log('Search payload:', payload);
    this.statusMsg = `Searching (${this.supportType})...`;
    // TODO: call service.search(payload)
  }

  onCancel(): void {
    this.form.reset({
      paymentCycle: 1,
      supportType: this.supportType, // Keep current mode after reset
    });
    this.statusMsg = 'Form cleared.';
  }

  /** Optional: switch support type within the component (e.g., tabs/toggle) and update URL */
  switchSupportType(st: SupportType): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { program: st }, // Update query parameter in URL
      queryParamsHandling: 'merge', // Keep other params if any
    });
  }
}
