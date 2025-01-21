import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsonqratesSectionComponent } from './artistsonqrates-section.component';

describe('ArtistsonqratesSectionComponent', () => {
  let component: ArtistsonqratesSectionComponent;
  let fixture: ComponentFixture<ArtistsonqratesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistsonqratesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsonqratesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
