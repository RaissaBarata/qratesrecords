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
    { name: 'CHILLED COW', image: '/images/CHILLEDCOW.png' },
    { name: 'SOL', image: '/images/SOL.png' },
    { name: 'VULFPECK', image: '/images/VULFPECK.png' },
    { name: 'CHILLHOP', image: '/images/CHILLHOP.png' },
    { name: 'PHANTOM', image: '/images/PHANTOM.png' },
    { name: 'LO-FI HIP HOP', image: '/images/LOFI.png' },
    { name: 'STUDIO K', image: '/images/STUDIOK.png' },
    { name: 'VIBRANT SOUNDS', image: '/images/VIBRANTSOUNDS.png' },
    { name: 'JAZZY BEATS', image: '/images/JAZZYBEATS.png' },
    { name: 'ACOUSTIC VIBES', image: '/images/ACOUSTICVIBES.png' },
    { name: 'FUNKY GROOVES', image: '/images/FUNKYGROOVES.png' },
    { name: 'SOUNDWAVES', image: '/images/SOUNDWAVES.png' },
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
