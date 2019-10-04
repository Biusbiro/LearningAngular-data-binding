import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  value: number = 5;
  destroyer: boolean = false;

  changeValue(){
    this.value ++;
  }

  cicleDestroyer(){
    this.destroyer = true;
  }
}
