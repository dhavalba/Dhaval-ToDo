import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todolist } from '../models/todo.model';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.css']
})
export class TodoDataComponent implements OnInit {
  @Input() list: Todolist;
  @Input() i: number;
  @Output() listdelete: EventEmitter<any> = new EventEmitter();
  @Output() checkboxdone: EventEmitter<any> = new EventEmitter();

  constructor() { }
  // id: number;
  ngOnInit(): void {
  }
  onDeleteClick(list: Todolist) {
    console.log("Delete working");
    this.listdelete.emit(list);
  }
  oncheckboxclick(list: Todolist) {
    this.checkboxdone.emit(list);
  }
}
