import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylstudioSectionComponent } from './vinylstudio-section.component';

describe('VinylstudioSectionComponent', () => {
  let component: VinylstudioSectionComponent;
  let fixture: ComponentFixture<VinylstudioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinylstudioSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinylstudioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
