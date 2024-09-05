import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from "./carousel/carousel.component";
import { FormularioComponent } from './formulario/formulario.component';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CarouselComponent, 
    FormularioComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fotoUrl: string = 'https://res.cloudinary.com/df9ijwlgx/image/upload/v1725215969/imagen_2024-09-01_134109601_kevkad.png'
  java: string = 'https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png'
  title = 'proyecto-cv';
}
