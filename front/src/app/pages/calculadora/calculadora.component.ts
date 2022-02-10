import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculadoraService } from 'src/app/services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado = 0;
  subimited = false;

  formCalculadora = new FormGroup({
    primeiroNumero: new FormControl('', [Validators.required]),
    segundoNumero: new FormControl('', [Validators.required]),
  });

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
  }

  somar() {
    this.subimited = true;
    if (this.formCalculadora.valid) {
      this.calculadoraService.somar(this.formCalculadora.value).subscribe({
        next: (r) => {
          this.resultado = r;
        }
      })
    }
  }

  dividir() {
    this.subimited = true;
    if (this.formCalculadora.valid) {
      this.calculadoraService.dividir(this.formCalculadora.value).subscribe({
        next: (r) => {
          this.resultado = r;
        }
      })
    }
  }

  subtrair() {
    this.subimited = true;
    if (this.formCalculadora.valid) {
      this.calculadoraService.subtrair(this.formCalculadora.value).subscribe({
        next: (r) => {
          this.resultado = r;
        }
      })
    }
  }

  multiplicar() {
    this.subimited = true;
    if (this.formCalculadora.valid) {
      this.calculadoraService.multiplicar(this.formCalculadora.value).subscribe({
        next: (r) => {
          this.resultado = r;
        }
      })
    }
  }

}
