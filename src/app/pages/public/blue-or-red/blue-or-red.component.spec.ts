import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueOrRedComponent } from './blue-or-red.component';

describe('BlueOrRedComponent', () => {
  let component: BlueOrRedComponent;
  let fixture: ComponentFixture<BlueOrRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueOrRedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueOrRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
