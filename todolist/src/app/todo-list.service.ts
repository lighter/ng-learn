import { TodoItem } from './shared/todo-item';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoListService {

  todoItems: TodoItem[];

  // todoItems: TodoItem[] = [
  //   {id: 1, value: 'Todo 1', done: false},
  //   {id: 2, value: 'Todo 2', done: true},
  //   {id: 3, value: 'Todo 3', done: false}
  // ];

  constructor(private  http: Http) { }

  loadTodoList() {
    this.http
      .get('assets/todo-list.json')
      .toPromise()
      .then(response => {
        this.todoItems = response.json();
    });
  }

  getTodoList() {
    return this.todoItems;
  }

  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  deleteItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

  toogleItemStatus(item: TodoItem) {
    item.done = !item.done;
  }
}
