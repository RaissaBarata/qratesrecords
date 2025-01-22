import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Artist {
  name: string;
  image: string;
}

@Component({
  selector: 'app-growingcommunity-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './growingcommunity-section.component.html',
  styleUrls: ['./growingcommunity-section.component.css'],
})
export class GrowingcommunitySectionComponent implements OnInit, OnDestroy {
  artists: Artist[] = [
    { name: 'CHILLED COW', image: '/images/CHILLEDCOW.webp' },
    { name: 'SOL', image: '/images/SOL.webp' },
    { name: 'VULFPECK', image: '/images/VULFPECK.webp' },
    { name: 'CHILLHOP', image: '/images/CHILLHOP.webp' },
    { name: 'PHANTOM', image: '/images/PHANTOM.webp' },
    { name: 'LO-FI HIP HOP', image: '/images/LOFI.webp' },
    { name: 'STUDIO K', image: '/images/STUDIOK.webp' },
    { name: 'VIBRANT SOUNDS', image: '/images/VIBRANTSOUNDS.webp' },
    { name: 'JAZZY BEATS', image: '/images/JAZZYBEATS.webp' },
    { name: 'ACOUSTIC VIBES', image: '/images/ACOUSTICVIBES.webp' },
    { name: 'FUNKY GROOVES', image: '/images/FUNKYGROOVES.webp' },
    { name: 'SOUNDWAVES', image: '/images/SOUNDWAVES.webp' },
  ];

  displayArtists: Artist[] = [];
  position = 0;
  animationFrameId!: number;
  lastUpdateTime = 0;
  speed = 0.1;

  ngOnInit() {
    this.displayArtists = [
      ...this.artists,
      ...this.artists,
      ...this.artists,
      ...this.artists,
      ...this.artists,
    ];

    const animate = (timestamp: number) => {
      if (this.lastUpdateTime) {
        const deltaTime = timestamp - this.lastUpdateTime;
        this.position += this.speed * deltaTime;

        if (this.position >= this.displayArtists.length * 100) {
          this.position = this.position % (this.displayArtists.length * 100);
        }
      }

      this.lastUpdateTime = timestamp;
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  getTransform() {
    return `translateX(-${this.position}px)`;
  }
}
