import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListService } from './../todo-list.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  //@Input('items') theItems: TodoItem[];
  // @Input() items: TodoItem[];
  // @Output() deleteItem = new EventEmitter();

  constructor(private  todoListService: TodoListService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('Init');
    this.todoListService.loadTodoList();
  }

  getTodoList() {
    return this.todoListService.getTodoList();
  }

  itemClick(item: TodoItem) {
    this.todoListService.toogleItemStatus(item);
  }

  delete (item: TodoItem) {
    // this.deleteItem.emit(item)
    this.todoListService.deleteItem(item);
  }
}
