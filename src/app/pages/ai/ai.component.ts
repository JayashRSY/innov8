import { Component } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AiComponent {
  cards = [
    {
      icon: "fas fa-chart-line",
      title: "AI-Driven Market Analysis",
      description: "Utilizing AI to analyze market trends and consumer behavior for strategic insights."
    },
    {
      icon: "fas fa-cogs",
      title: "Product Enhancement with AI",
      description: "Integrating AI to enhance product features and capabilities."
    },
    {
      icon: "fas fa-robot",
      title: "Business Process Automation",
      description: "Automating business processes for increased efficiency and productivity."
    },
    {
      icon: "fas fa-database",
      title: "Data-Driven Decision Making",
      description: "Leveraging data and AI to make informed and strategic business decisions."
    },
    {
      icon: "fas fa-truck",
      title: "AI in Supply Chain",
      description: "Applying AI to optimize and innovate supply chain management."
    },
    {
      icon: "fas fa-people-arrows",
      title: "Organizational Adaptation",
      description: "Helping organizations adapt to AI technologies and transform business operations."
    }
  ];

}
