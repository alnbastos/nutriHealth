import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  peso: number;
  altura: number;
  imc: number;

  constructor(){

  }

  calcularImc(): number{
    let imc = 0;
    let alt = this.altura;
    let pes = this.peso;

    this.imc = pes / (alt ** 2) //.toFixed(2);
    //alert(this.imc);

    return this.imc;
  }
}
