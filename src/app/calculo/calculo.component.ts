import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.scss'],
})
export class CalculadoraComponent {
  public num1!: number;
  public num2!: number;
  public result!: number;

  constructor() {}

  calculate(operation: string) {
    switch (operation) {
      case 'soma':
        this.result = this.num1 + this.num2;
        break;
      case 'subtracao':
        this.result = this.num1 - this.num2;
        break;
      case 'multiplicacao':
        this.result = this.num1 * this.num2;
        break;
      case 'divisao':
        this.result = this.num1 / this.num2;
        break;
      default:
        this.result = 0;
    }
  }
}
