import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images: string[] = [
    'https://res.cloudinary.com/df9ijwlgx/image/upload/v1724644100/imagen_2024-08-25_224954798_jfx0tr.png',
    'https://res.cloudinary.com/df9ijwlgx/image/upload/v1724644207/imagen_2024-08-25_225143098_m0jlaq.png',
    'https://res.cloudinary.com/df9ijwlgx/image/upload/v1724644285/imagen_2024-08-25_225300430_rlv9si.png'
    
  ];
  
  currentIndex = 0;
  nextImage(){
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  prevImage(){
    this.currentIndex = (this.currentIndex -1 + this.images.length) % this.images.length;
  }

}
