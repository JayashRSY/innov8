import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  words = ['Technology', 'Development', 'Designing', 'Marketing'];
  currentText = '';
  wordIndex = 0;
  charIndex = 0;
  isAdding = true;
  typingInterval: any;

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    this.typingInterval = setInterval(() => {
      if (this.isAdding) {
        if (this.charIndex < this.words[this.wordIndex].length) {
          this.currentText += this.words[this.wordIndex].charAt(this.charIndex);
          this.charIndex++;
        } else {
          this.isAdding = false;
          setTimeout(() => {
            this.charIndex = this.words[this.wordIndex].length - 1;
          }, 1000);  // Delay before erasing
        }
      } else {
        if (this.charIndex >= 0) {
          this.currentText = this.currentText.substring(0, this.charIndex);
          this.charIndex--;
        } else {
          this.isAdding = true;
          this.wordIndex = (this.wordIndex + 1) % this.words.length;
        }
      }
    }, 200);
  }

  scrollDown() {
    window.scrollBy(0, window.innerHeight);
  }

  ngOnDestroy() {
    clearInterval(this.typingInterval);
  }
}
