import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements AfterViewInit {

  private mouseX = window.innerWidth / 2;
  private mouseY = window.innerHeight / 2;
  private blobX = window.innerWidth / 2;
  private blobY = window.innerHeight / 2;
  private vx = 0;
  private vy = 0;
  private readonly friction = 0.9;
  private readonly attraction = 0.05;
  private readonly maxDeformation = 40;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const blob = this.elementRef.nativeElement.querySelector('#blob');
    const blobPath = this.elementRef.nativeElement.querySelector('#blob-path');

    document.addEventListener('mousemove', (event: MouseEvent) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });

    const animate = () => {
      const dx = this.mouseX - this.blobX;
      const dy = this.mouseY - this.blobY;

      this.vx += dx * this.attraction;
      this.vy += dy * this.attraction;

      this.vx *= this.friction;
      this.vy *= this.friction;

      this.blobX += this.vx;
      this.blobY += this.vy;

      const deformationX = Math.max(Math.min(this.vx, this.maxDeformation), -this.maxDeformation);
      const deformationY = Math.max(Math.min(this.vy, this.maxDeformation), -this.maxDeformation);

      // Create a new path with subtle deformation
      const pathData = `
        M50,10
        Q65,${10 + deformationY}, 70,30
        Q${70 + deformationX},45, 50,50
        Q30,45, 30,30
        Q35,${10 + deformationY}, 50,10
        Z
      `;

      blobPath.setAttribute('d', pathData);
      blob.style.transform = `translate(${this.blobX}px, ${this.blobY}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }
}
