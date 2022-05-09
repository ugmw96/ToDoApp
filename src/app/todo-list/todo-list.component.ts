import { Component, OnInit } from '@angular/core';
import { ListService } from '../Services/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList!:string[];

  onRemove(id:number){
    this.listService.removeTodo(id);
  }

  constructor(private listService:ListService) { }

  ngOnInit(): void {
    this.todoList=this.listService.todos;
  }

}
