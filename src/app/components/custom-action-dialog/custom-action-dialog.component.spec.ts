import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomActionDialogComponent } from './custom-action-dialog.component';

describe('CustomActionDialogComponent', () => {
  let component: CustomActionDialogComponent;
  let fixture: ComponentFixture<CustomActionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomActionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
