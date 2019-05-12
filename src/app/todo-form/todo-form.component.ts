import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {DataService} from "../data.service"
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  value: String;
  constructor(private formBuilder: FormBuilder,private data:DataService) { 
    this.todoForm = this.formBuilder.group({
      todo:['', Validators.required]
    })
  }
  onSubmit(){
    this.data.addTodo(this.todoForm.value.todo)
    this.todoForm.reset()
  }
  ngOnInit() {
  }

}
