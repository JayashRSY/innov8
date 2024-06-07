import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UiUxComponent {
  cards = [
    {
      icon: "fas fa-users",
      title: "User Experience Design",
      description: "Optimizing user interactions for better satisfaction and engagement."
    },
    {
      icon: "fas fa-sitemap",
      title: "Information Architecture",
      description: "Structuring content effectively to enhance usability."
    },
    {
      icon: "fas fa-exchange-alt",
      title: "Interaction Design",
      description: "Creating intuitive and engaging interactions."
    },
    {
      icon: "fas fa-palette",
      title: "UI Kit Design",
      description: "Developing reusable UI components for consistency."
    },
    {
      icon: "fas fa-cogs",
      title: "Design System Development",
      description: "Establishing a cohesive design language."
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Branded Merchandise",
      description: "Creating products that reflect your brand identity."
    },
    {
      icon: "fas fa-icons",
      title: "Iconography Design",
      description: "Designing icons that enhance visual communication."
    },
    {
      icon: "fas fa-comments",
      title: "Messaging & Voice Strategy",
      description: "Developing a consistent and engaging voice for your brand."
    },
    {
      icon: "fas fa-archive",
      title: "Brand Asset Management",
      description: "Managing and maintaining your brand assets effectively."
    }
  ];

}
