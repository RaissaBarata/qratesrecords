import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component'; // Import do HeroSectionComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, HeroSectionComponent], // Certifique-se de incluir o HeroSectionComponent aqui
})
export class AppComponent {
  title = 'qratesrecords';
}
