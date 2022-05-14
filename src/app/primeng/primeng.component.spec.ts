import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengComponemt } from './primeng.component';

describe('PrimngComponent', () => {
  let component: PrimengComponemt;
  let fixture: ComponentFixture<PrimengComponemt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengComponemt ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengComponemt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
