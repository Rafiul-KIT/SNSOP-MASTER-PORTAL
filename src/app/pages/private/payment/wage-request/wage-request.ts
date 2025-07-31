// wage-request.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

type SupportType = 'LIPW' | 'DIS';

@Component({
  selector: 'wage-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

      /** Keep supportType in the payload too */
      supportType: ['LIPW', Validators.required],
    });
  }

  ngOnInit(): void {
    // Subscribe to query param changes (works even when navigating between LIPW<->DIS on same path)
    this.sub = this.route.queryParamMap.subscribe((qp) => {
      const raw = (qp.get('supportType') || '').toUpperCase();
      const st = raw === 'DIS' ? 'DIS' : 'LIPW'; // default to LIPW if missing/invalid
      this.applySupportType(st);
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
    // (You can put any conditional logic here)
    if (st === 'LIPW') {
      // set defaults/toggles specific to LIPW
      this.statusMsg = 'LIPW mode';
    } else {
      // set defaults/toggles specific to DIS
      this.statusMsg = 'DIS mode';
    }
  }

  onLookup(): void {
    this.statusMsg = `Lookup clicked in ${this.supportType} mode.`;
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
      supportType: this.supportType, // keep current mode after reset
    });
    this.statusMsg = 'Form cleared.';
  }

  /** Optional: switch within the component (e.g., tabs/toggle) and update URL */
  switchSupportType(st: SupportType): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { supportType: st },
      queryParamsHandling: 'merge', // keep other params if any
    });
  }
}
