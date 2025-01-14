import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SectionOneComponent } from './components/section-one/section-one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, HeroSectionComponent, SectionOneComponent],
})
export class AppComponent {
  title = 'qratesrecords';
}
