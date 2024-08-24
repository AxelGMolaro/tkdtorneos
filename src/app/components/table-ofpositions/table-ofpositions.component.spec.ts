import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOFPositionsComponent } from './table-ofpositions.component';

describe('TableOFPositionsComponent', () => {
  let component: TableOFPositionsComponent;
  let fixture: ComponentFixture<TableOFPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOFPositionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOFPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
