import { Component } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {
  cards = [
    {
      icon: "fas fa-bullseye",
      title: "Differentiate",
      description: "Creating a unique identity that sets your brand apart from competitors."
    },
    {
      icon: "fas fa-check-circle",
      title: "Validate",
      description: "Ensuring your brand strategy is effective and resonates with your audience."
    },
    {
      icon: "fas fa-handshake",
      title: "Collaborate",
      description: "Working together to create a cohesive and compelling brand story."
    },
    {
      icon: "fas fa-seedling",
      title: "Cultivate",
      description: "Nurturing your brand to grow and adapt in a dynamic market."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovate",
      description: "Bringing fresh, creative ideas to drive your brand forward."
    }
  ];

}
