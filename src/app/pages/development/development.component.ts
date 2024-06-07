import { Component } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent {
  cards = [
    {
      icon: "fas fa-mobile-alt",
      title: "Native iOS/Android, Flutter Development",
      description: "Building high-performance mobile applications for iOS, Android, and Flutter."
    },
    {
      icon: "fas fa-coins",
      title: "Blockchain, NFT, Cryptocurrencies",
      description: "Innovating with blockchain technology, NFTs, and cryptocurrencies."
    },
    {
      icon: "fas fa-network-wired",
      title: "Connected Devices/IoT",
      description: "Integrating connected devices for seamless IoT solutions."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Front-end Web Development",
      description: "Crafting engaging and responsive front-end web applications."
    },
    {
      icon: "fas fa-chart-line",
      title: "Analytics Platform Integration",
      description: "Integrating analytics platforms to drive data-informed decisions."
    },
    {
      icon: "fas fa-map-signs",
      title: "Product Roadmapping",
      description: "Strategizing product development to align with business goals."
    },
    {
      icon: "fas fa-tasks",
      title: "Sprint Planning",
      description: "Planning agile sprints to optimize development cycles."
    },
    {
      icon: "fas fa-tools",
      title: "Monitoring & Maintenance",
      description: "Ensuring continuous performance with monitoring and maintenance."
    }
  ];

}
