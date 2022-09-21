import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addtodolist: EventEmitter<any> = new EventEmitter();
  title: string;
  desc: string;
  id: number;
  AddToDo:FormGroup;
  constructor(private fb : FormBuilder) {
    this.AddToDo = fb.group({});
  }

  ngOnInit(): void {
    this.AddToDo = this.fb.group({
      title: this.fb.control(''),
      desc: this.fb.control(''),
     });
  }
  onSubmit() {
    const list = {
      title: this.AddToDo.value.title,
      desc: this.AddToDo.value.desc,
      active: true
    }
    this.addtodolist.emit(list);
    this.AddToDo.reset();
  }
}
