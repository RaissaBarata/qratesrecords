import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '3s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class HeroSectionComponent implements OnInit {
  description =
    'Full-service pressing, a global retail network, customer support — and you keep up to 85% of profits.';
  displayedText: string = '';
  currentIndex: number = 0;
  typingSpeed: number = 50;

  ngOnInit() {
    this.typeText();
  }

  private typeText() {
    if (this.currentIndex < this.description.length) {
      this.displayedText += this.description[this.currentIndex];
      this.currentIndex++;

      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }
}
