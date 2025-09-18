import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Memoria } from './memoria/memoria';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Memoria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Calculadora';
}
