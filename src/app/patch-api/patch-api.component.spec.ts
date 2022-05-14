import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchApiComponent } from './patch-api.component';

describe('PatchApiComponent', () => {
  let component: PatchApiComponent;
  let fixture: ComponentFixture<PatchApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
