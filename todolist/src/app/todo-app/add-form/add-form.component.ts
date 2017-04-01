import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoListService } from './../todo-list.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  // @Output() addTodoItem = new EventEmitter();

  placeholderText = 'todo something';
  todoText = '';

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
  }

  addTodo($event) {
    console.log('click it');
    console.log('event', $event);
    console.log('todoText', this.todoText);

    // this.addTodoItem.emit(this.todoText);
    this.todoListService.addTodo(this.todoText);
  }

  // changeTodoText($event: KeyboardEvent) {
  //   this.todoText = ($event.target as HTMLInputElement).value;
  //   console.log('todoText', this.todoText);
  // }

}
