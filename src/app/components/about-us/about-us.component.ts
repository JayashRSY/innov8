import { Component} from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})


export class AboutUsComponent {
  pillars = [
    { name: 'User Experience Design', color: '' },
    { name: 'Information Architecture', color: '' },
    { name: 'Interaction Design', color: '' },
    { name: 'UI Kit Design', color: '' },
    { name: 'Design System Development', color: '' },
    { name: 'Branded Merchandise', color: '' },
    { name: 'Iconography Design', color: '' },
    { name: 'Brand Asset Management', color: '' },
  ];

  pastelColors = [
    'rgba(255, 182, 193, 0.3)',  // Light Pink
    'rgba(255, 223, 186, 0.3)',  // Light Peach
    'rgba(255, 239, 186, 0.3)',  // Light Yellow
    'rgba(186, 255, 201, 0.3)',  // Light Green
    'rgba(186, 255, 255, 0.3)',  // Light Cyan
    'rgba(186, 213, 255, 0.3)',  // Light Blue
    'rgba(221, 186, 255, 0.3)',  // Light Purple
    'rgba(255, 186, 255, 0.3)'   // Light Magenta
  ];

  ngOnInit(): void {
    this.pillars.forEach(pillar => {
      pillar.color = this.pastelColors[Math.floor(Math.random() * this.pastelColors.length)];
    });
  }
}
