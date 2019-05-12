import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service"
@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  constructor(private data:DataService) {
  }
  onRemove(i){
    this.data.removeDone(i);
  }
  ngOnInit() {
  }

}
