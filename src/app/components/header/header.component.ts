import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  activeSection: string | null = null;
  navbarLinks = [
    { section: 'hero', label: 'Home' },
    { section: 'about', label: 'About' },
    { section: 'works', label: 'Works' },
    { section: 'services', label: 'Services' },
    { section: 'footer', label: 'Contact' }
  ];


  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.activeSection = section; // Update active section

  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
