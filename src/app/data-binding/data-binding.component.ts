import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http.biu.net.br';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  actualValue: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;
  name: string = 'abc';
  curseName: string = 'Angular';
  initialCounterValue: number = 15;

  people: any = {
    nome: '',
    age: null
  }

  getValor(){
    return 1+1;
  }

  clickButton(){
    alert('YOU clicked in this Button')
  }

  saveValue(value){
    this.savedValue = value;
  }

  onKeyUp(evento: KeyboardEvent){
    this.actualValue = (event.target as HTMLInputElement).value
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onChangeValue(event){
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
