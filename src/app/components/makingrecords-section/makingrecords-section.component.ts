import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  isExpanded: boolean;
}

interface ServiceCategory {
  name: string;
  services: Service[];
}

@Component({
  selector: 'app-makingrecords-section',
  imports: [CommonModule],
  templateUrl: './makingrecords-section.component.html',
  styleUrl: './makingrecords-section.component.css',
  standalone: true,
})
export class MakingrecordsSectionComponent {
  serviceCategories: ServiceCategory[] = [
    {
      name: 'Making Records',
      services: [
        {
          title: 'Design & Customization',
          description: 'Custom design services for your music project',
          isExpanded: false,
        },
        {
          title: 'Mastering',
          description: 'Professional audio mastering services',
          isExpanded: false,
        },
        {
          title: 'Artwork Assistance',
          description: 'Help with album artwork and visual identity',
          isExpanded: false,
        },
        {
          title: 'Pressing',
          description: 'Vinyl and CD pressing services',
          isExpanded: false,
        },
      ],
    },
    {
      name: 'Storage & Distribution',
      services: [
        {
          title: 'Free Storage',
          description: 'Secure storage for your music files',
          isExpanded: false,
        },
        {
          title: 'Shop',
          description: 'Online store for your merchandise',
          isExpanded: false,
        },
        {
          title: 'Digital Downloads',
          description: 'Digital distribution platform',
          isExpanded: false,
        },
        {
          title: 'Retail Distribution',
          description: 'Get your music in stores worldwide',
          isExpanded: false,
        },
      ],
    },
    {
      name: 'Support',
      services: [
        {
          title: 'Customer Support',
          description: '24/7 customer service',
          isExpanded: false,
        },
        {
          title: 'Artist Support',
          description: 'Dedicated support for artists',
          isExpanded: false,
        },
      ],
    },
  ];

  toggleService(service: Service): void {
    service.isExpanded = !service.isExpanded;
  }

  learnMore(): void {
    console.log('Learn More clicked');
  }
}
