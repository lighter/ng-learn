import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  todoItems: TodoItem[] = [
    {id: 1, value: 'Todo 1', done: false},
    {id: 2, value: 'Todo 2', done: true},
    {id: 3, value: 'Todo 3', done: false},
  ]

  addTodo (text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  deleteItem(item: TodoItem) {
    console.log('delete item', item);
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
    console.log('delete result items', this.todoItems);
  }
}
