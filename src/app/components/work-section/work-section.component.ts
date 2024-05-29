import { Component } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent {
  projectList = [
    {
      name: "Displate",
      link: "",
      description: 'Displate description'
    },
    {
      name: "Merlin Printers",
      link: "",
      description: ''
    },
    {
      name: "Portfolio Website",
      link: "",
      description: 'Website description'
    },
  ]
  currentSlide = 0;

  prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    if (this.currentSlide === 0) {
      this.currentSlide = totalSlides - 1;
    } else {
      this.currentSlide--;
    }
    this.updateSlidePosition();
  }

  nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    if (this.currentSlide === totalSlides - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slides = document.querySelectorAll('.carousel-slide');
    const track = document.querySelector('.carousel-track') as HTMLElement;
    const slideWidth = slides[0].clientWidth;

    track.style.transform = `translateX(-${this.currentSlide * slideWidth}px)`;
  }
}
