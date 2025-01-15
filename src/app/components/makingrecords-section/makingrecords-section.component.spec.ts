import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingrecordsSectionComponent } from './makingrecords-section.component';

describe('MakingrecordsSectionComponent', () => {
  let component: MakingrecordsSectionComponent;
  let fixture: ComponentFixture<MakingrecordsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakingrecordsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakingrecordsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
