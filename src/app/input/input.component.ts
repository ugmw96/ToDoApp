import { Component, OnInit } from '@angular/core';
import { ListService } from '../Services/list.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  
  inputTodo(input:string){
    this.listService.onInput(input);
  }

  constructor(private listService:ListService) { }

  ngOnInit(): void {
  }

}
