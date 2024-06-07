import { Component } from '@angular/core';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent {
  cards = [
    {
      icon: "fas fa-globe",
      title: "New Market Entry",
      description: "Entering new markets strategically to expand reach and impact."
    },
    {
      icon: "fas fa-rocket",
      title: "New Product Launch",
      description: "Bringing innovative products to market with precision and impact."
    },
    {
      icon: "fas fa-briefcase",
      title: "New Business Development",
      description: "Identifying and developing new business opportunities."
    },
    {
      icon: "fas fa-chart-line",
      title: "Balance Scorecard",
      description: "Using balanced scorecards to align business activities with strategy."
    },
    {
      icon: "fas fa-cogs",
      title: "Process Design / Reengineering",
      description: "Redesigning processes to improve efficiency and effectiveness."
    },
    {
      icon: "fas fa-handshake",
      title: "M&A Analysis",
      description: "Analyzing mergers and acquisitions for strategic growth."
    },
    {
      icon: "fas fa-truck",
      title: "Supply Chain Optimization",
      description: "Optimizing supply chains for better performance and cost savings."
    },
    {
      icon: "fas fa-users",
      title: "Organizational Change",
      description: "Managing organizational change to ensure smooth transitions."
    },
    {
      icon: "fas fa-sync-alt",
      title: "Change Management",
      description: "Implementing change management strategies to guide transformations."
    }
  ];

}
