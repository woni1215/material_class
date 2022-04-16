import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleDialogComponent } from './apple-dialog.component';

describe('AppleDialogComponent', () => {
  let component: AppleDialogComponent;
  let fixture: ComponentFixture<AppleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
