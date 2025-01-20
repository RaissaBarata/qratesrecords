import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersupportSectionComponent } from './customersupport-section.component';

describe('CustomersupportSectionComponent', () => {
  let component: CustomersupportSectionComponent;
  let fixture: ComponentFixture<CustomersupportSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersupportSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersupportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
