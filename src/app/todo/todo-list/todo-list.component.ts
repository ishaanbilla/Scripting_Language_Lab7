import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  notes = ['Prepare for sessional', 'Work on ML side project', 'Work on Mini project', 'Prepare for placement'];


  constructor() { }

  ngOnInit(): void {
  }


}
