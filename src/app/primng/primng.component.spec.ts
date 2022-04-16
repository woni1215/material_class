import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimngComponent } from './primng.component';

describe('PrimngComponent', () => {
  let component: PrimngComponent;
  let fixture: ComponentFixture<PrimngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
