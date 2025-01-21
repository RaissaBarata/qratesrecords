import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingcommunitySectionComponent } from './growingcommunity-section.component';

describe('GrowingcommunitySectionComponent', () => {
  let component: GrowingcommunitySectionComponent;
  let fixture: ComponentFixture<GrowingcommunitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowingcommunitySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowingcommunitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
