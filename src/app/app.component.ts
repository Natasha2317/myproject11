import { MyDet } from './shared/models/det.model';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  deleteCard = new EventEmitter<number>()

  RandomStatus(){
    let random_boolean = Math.random() >= 0.5;
    return random_boolean;
  };

  dets: MyDet[] = [
    {id: 1, name: 'card', status: this.RandomStatus()},
    {id: 2, name: 'card', status: this.RandomStatus()},
    {id: 3, name: 'card', status: this.RandomStatus()},
    {id: 4, name: 'card', status: this.RandomStatus()},
    {id: 5, name: 'card', status: this.RandomStatus()},
    {id: 6, name: 'card', status: this.RandomStatus()},
    {id: 7, name: 'card', status: this.RandomStatus()},
    {id: 8, name: 'card', status: this.RandomStatus()},
    {id: 9, name: 'card', status: this.RandomStatus()},
    {id: 10, name: 'card', status: this.RandomStatus()}
  ];

  addCard(inputCard){
    let lengthDets = (Object.keys(this.dets).length);
    let endDets;
    if (lengthDets >= 1)
      endDets = this.dets[lengthDets - 1].id;
    else endDets = 0;

    this.dets.push({id: endDets + 1, name: inputCard, status: this.RandomStatus()})
  }

  onDeleteCard(id: number){
    this.deleteCard.emit(id);
    let index = this.dets.findIndex((dets) => dets.id === id);
    if(index !== -1)
      this.dets.splice(index, 1);
  }
}



  /**flag = false;
  buttonEnabled = false;

  blockX = 0;
  blockY = 0;

  inputValue = 'test';

  fontSize = 15;

  someArray: string[] = ['первый','второй','третий','четвертый'];

  constructor(){
    setTimeout(() =>{
      this.buttonEnabled = true;
      this.fontSize = 20;
    }, 1500);
  }

  hello(){
    return 'hello, world';
  }

  getCoords(e: MouseEvent){
    this.blockX = e.offsetX;
    this.blockY = e.offsetY;
  }

  getData(elm: HTMLInputElement){
    console.log(elm.value);
  }*/

