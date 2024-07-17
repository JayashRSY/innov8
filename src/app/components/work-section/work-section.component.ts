import { Component } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent {
  items = [1, 2, 3, 4, 5]; // Replace with your data
  activeIndex = 0; // Initialize active index

  constructor() { }

  // Methods for carousel navigation
  prevSlide() {
    this.activeIndex = (this.activeIndex === 0) ? this.items.length - 1 : this.activeIndex - 1;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex === this.items.length - 1) ? 0 : this.activeIndex + 1;
  }
}
