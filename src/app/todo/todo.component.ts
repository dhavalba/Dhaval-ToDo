import { Component, OnInit } from '@angular/core';
import { Todolist } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  mytodolists: Todolist[];
  localdata: string;
  constructor() {

    this.localdata = localStorage.getItem("mytodolists");
    if(this.localdata == null){
      this.mytodolists = [];
    }else {
      this.mytodolists = JSON.parse(this.localdata);
    }
  }

  ngOnInit(): void {
  }
  deletelisten(list: Todolist) {
    console.log(list);
    const index = this.mytodolists.indexOf(list);
    this.mytodolists.splice(index,1);
    localStorage.setItem("mytodolists",JSON.stringify(this.mytodolists));
  }
  addtodolisten(list: Todolist) {
      console.log(list);
      this.mytodolists.push(list);
      localStorage.setItem("mytodolists",JSON.stringify(this.mytodolists));
  }
  checkboxlisten(list: Todolist){
    const index = this.mytodolists.indexOf(list);
    this.mytodolists[index].active = !this.mytodolists[index].active;
    localStorage.setItem("mytodolists",JSON.stringify(this.mytodolists));
  }
  checkboxundonelisten(list: Todolist) {
    const index = this.mytodolists.indexOf(list);
    !this.mytodolists[index].active == this.mytodolists[index].active;
    localStorage.setItem("mytodolists",JSON.stringify(this.mytodolists));
  }

}
