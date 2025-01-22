import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artistsonqrates-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artistsonqrates-section.component.html',
  styleUrls: ['./artistsonqrates-section.component.css'],
})
export class ArtistsonqratesSectionComponent {
  items = [
    {
      image: 'images/SOLquote.webp',
      quote:
        "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time. - SOL, artist",
      color: '#FFD700',
    },
    {
      image: 'images/artist2.webp',
      quote:
        "Vinyl has a soul. The crackles and pops, the warmth of the sound—it's like the music is alive. Releasing this album on vinyl felt like giving it a new life. - SOUNDWAVES, artist",
      color: '#87CEEB',
    },
    {
      image: 'images/artist3.webp',
      quote:
        "Seeing fans hold the vinyl in their hands, flipping through the artwork, and placing the needle on the record—it's a connection that digital just can't replicate. - CHILLHOP, artist",
      color: '#98FB98',
    },
  ];

  activeIndex = 0;
  currentImage = this.items[this.activeIndex].image;
  currentQuote = this.items[this.activeIndex].quote;
  currentColor = this.items[this.activeIndex].color;

  changeContent(index: number): void {
    this.activeIndex = index;
    this.currentImage = this.items[index].image;
    this.currentQuote = this.items[index].quote;
    this.currentColor = this.items[index].color;
  }
}
