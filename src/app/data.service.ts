import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos=[];
  dones=[];
  local_url='http://localhost:5000'
  constructor(private http: HttpClient) {
    this.getData()
  }
  addTodo(todo){
    this.http.get(this.local_url+`/api/todo/addTodo/${todo}`)
    .subscribe((res)=>{
      console.log(res);
      this.getData()
  });
  // axios.get(this.local_url+`/api/todo/addTodo/${todo}`)
  // .then(obj=>{
  //   console.log(obj)
  // })
  // .catch(err=>{
  //   console.log(err)
  // })
    // .pipe(
    //   map( // Log the result or error
    //    (data) =>console.log(data),        
    //   )
    // );
  }
  doneTodo(i){
    this.http.get(this.local_url+`/api/todo/addDone/${this.todos[i].todo}`)
    .subscribe((res)=>{
      console.log(res);
      this.getData()
  });
  }
  removeTodo(i){
    console.log(this.todos[i])
    this.http.get(this.local_url+`/api/todo/removeTodo/${this.todos[i].todo}`)
    .subscribe((res)=>{
      console.log(res);
      this.getData()
  });
  
  }
  removeDone(i){
    this.http.get(this.local_url+`/api/todo/removeDone/${this.dones[i].todo}`)
    .subscribe((res)=>{
      console.log(res);
      this.getData()
  });
  }
  getData(){
    this.http.get(this.local_url+`/api/todo/getData`)
    .subscribe((res)=>{
      console.log(res)
     this.todos=res.data.todos;
     this.dones=res.data.dones;
     console.log(this.todos)
  });
  }
 
}
