import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  todos=['gayan madhusanka','Rukshi panchalee'];

  onInput(input:string){
    this.todos.push(input);
  }

  removeTodo(id:number){
    this.todos.splice(id,1);
  }



  constructor() { }
}
