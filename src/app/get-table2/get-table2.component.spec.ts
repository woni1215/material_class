import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetTable2Component } from './get-table2.component';

describe('GetTable2Component', () => {
  let component: GetTable2Component;
  let fixture: ComponentFixture<GetTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTable2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
