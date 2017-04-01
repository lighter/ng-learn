import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoDonePipe } from './todo-done.pipe';
import { TodoListService } from './todo-list.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoAppComponent,
    AddFormComponent,
    TodoItemsComponent,
    TodoDonePipe,
  ],
  providers: [TodoListService],
  exports: [
    TodoAppComponent
  ]
})
export class TodoAppModule { }
