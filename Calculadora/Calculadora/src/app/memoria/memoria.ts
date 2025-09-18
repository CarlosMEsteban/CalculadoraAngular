import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'memoria',
  imports: [FormsModule],
  templateUrl: './memoria.html',
  styleUrl: './memoria.css'
})
export class Memoria {
  resultado: number = 0;
  ultimoNumero: number = 0;
  ultimoOperador: string = '';
  constructor() {}

  tratarNumeroPulsado(numeroPulsado: number) {
    if (this.ultimoNumero == 0)      
      this.ultimoNumero = numeroPulsado;
    else
      this.ultimoNumero = this.ultimoNumero * 10 + numeroPulsado;
  }

 

  operar(nuevoOperador: string){
    console.log('Operar: ' + nuevoOperador);
    if (this.ultimoOperador === '')
    {      
      console.log('Primera operacion');
      this.ultimoOperador = nuevoOperador;
      this.resultado = this.ultimoNumero;
      this.ultimoNumero = 0;
    }
    else if (this.ultimoOperador === '+')
    {      
      console.log('Suma');
      this.resultado += this.ultimoNumero;
      this.ultimoNumero = 0;
      this.ultimoOperador = nuevoOperador;
    }
    else if (this.ultimoOperador === '-')
    {      
      console.log('Resta');
      this.resultado -= this.ultimoNumero;
      this.ultimoNumero = 0;
      this.ultimoOperador = nuevoOperador;
    }
    else if (this.ultimoOperador === 'x')
    {      
      console.log('Multiplicación');
      this.resultado *= this.ultimoNumero;
      this.ultimoNumero = 0;
      this.ultimoOperador = nuevoOperador;
    }
    else if (this.ultimoOperador === '%')
    {      
      console.log('Resta');
      this.resultado = this.resultado / this.ultimoNumero;
      this.ultimoNumero = 0;
      this.ultimoOperador = nuevoOperador;
    }



  }  

}
