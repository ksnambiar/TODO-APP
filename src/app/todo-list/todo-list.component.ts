import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  view=[];
  constructor(private data:DataService) { 
    this.view=this.data.todos;
  }
  onDone(i){
    this.data.doneTodo(i);
  }
  onRemove(i){
    this.data.removeTodo(i);
  }
  ngOnInit() {
  }

}
