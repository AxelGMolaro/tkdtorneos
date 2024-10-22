import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigthComponent } from './figth.component';

describe('FigthComponent', () => {
  let component: FigthComponent;
  let fixture: ComponentFixture<FigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
