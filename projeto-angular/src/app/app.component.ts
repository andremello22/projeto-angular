import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
