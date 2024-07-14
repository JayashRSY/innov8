import { Component } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent {
  services = [
    {
      "title": "Platform UI/UX",
      "description": "Visualizing the most powerful representation of your brand through compelling creative.",
      "routerLink": "/ui-ux"
    },
    {
      "title": "Strategy Consulting",
      "description": "Collaborating with business leaders to define, create, and launch inspiring initiatives.",
      "routerLink": "/consulting"
    },
    {
      "title": "Branding & Design",
      "description": "Building trust by communicating an authentic character to capture hearts and minds.",
      "routerLink": "/design"
    },
    {
      "title": "Application Development",
      "description": "Redefining modern mobile applications with industry-leading design and engineering.",
      "routerLink": "/development"
    },
    {
      "title": "Web3 & Blockchain",
      "description": "Empowering digital interactions by leveraging blockchain technologies for secure and transparent operations.",
      "routerLink": "/web3"
    },
    {
      "title": "Artificial Intelligence",
      "description": "Unlocking the potential of machine learning decision-making through intelligent algorithms and predictive analytics.",
      "routerLink": "/ai"
    }
  ]

}
