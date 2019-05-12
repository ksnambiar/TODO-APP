import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private data:DataService) {
  }
  onDone(i){
    this.data.doneTodo(i);
  }
  onRemove(i){
    this.data.removeTodo(i);
  }
  ngOnInit() {}
  

}
