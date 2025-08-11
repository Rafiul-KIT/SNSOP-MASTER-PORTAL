import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupSubProject } from './lookup-sub-project';

describe('LookupSubProject', () => {
  let component: LookupSubProject;
  let fixture: ComponentFixture<LookupSubProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookupSubProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookupSubProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
