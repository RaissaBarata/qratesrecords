import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { MakingrecordsSectionComponent } from './components/makingrecords-section/makingrecords-section.component';
import { CustomersupportSectionComponent } from './customersupport-section/customersupport-section.component';
import { GrowingcommunitySectionComponent } from './components/growingcommunity-section/growingcommunity-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    SectionOneComponent,
    MakingrecordsSectionComponent,
    CustomersupportSectionComponent,
    GrowingcommunitySectionComponent,
  ],
})
export class AppComponent {
  title = 'qratesrecords';
}
