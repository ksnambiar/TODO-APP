import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos=[];
  dones=[];
  constructor() {

   }
  addTodo(todo){
    this.todos.push(todo)
  }
  doneTodo(i){
    this.dones.push(this.todos[i])
    this.todos.splice(i,1)
  }
  removeTodo(i){
    this.todos.splice(i,1);
  }
  removeDone(i){
    this.dones.splice(i,1);
  }
}
