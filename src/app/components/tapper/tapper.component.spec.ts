import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapperComponent } from './tapper.component';

describe('TapperComponent', () => {
  let component: TapperComponent;
  let fixture: ComponentFixture<TapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
