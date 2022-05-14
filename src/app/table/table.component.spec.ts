import { TableComponemt } from './table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ScoreComponent', () => {
  let component: TableComponemt;
  let fixture: ComponentFixture<TableComponemt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponemt ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponemt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
