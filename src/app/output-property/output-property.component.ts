import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;
  @Output() changeValue = new EventEmitter();

  constructor() { }

  increase(){
    this.value ++;
    this.changeValue.emit({newValue: this.value});
  }

  decrease(){
    this.value --;
    this.changeValue.emit({newValue: this.value});
  }

  ngOnInit() {
  }

}
