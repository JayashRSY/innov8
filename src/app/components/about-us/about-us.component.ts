import { Component } from '@angular/core';


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
  cards = [
    {
      title: 'Forward-Thinking Approach',
      content: 'We don\'t just follow trends; we set them.Our team is constantly pushing boundaries, exploring new technologies, and embracing emerging trends to deliver cutting- edge solutions. Our forward - thinking approach ensures that we stay ahead of the curve and deliver innovative solutions that drive success.'
    },
    {
      title: 'Collaborative Partnership',
      content: 'We believe in the power of collaboration. By working closely with our clients, we gain a deep understanding of their goals, challenges, and vision, allowing us to tailor our solutions to their unique needs. We value collaboration and believe that the best results are achieved when we work together with our clients as trusted partners.'
    },
    {
      title: 'Exceptional Expertise',
      content: 'With a team of skilled professionals experienced in a wide range of technologies and industries, we have the expertise to tackle even the most complex projects with confidence and precision. Our team\'s exceptional expertise enables us to tackle complex projects with confidence and deliver outstanding results.'
    }
  ]
}
