import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,NgFor],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {
  taskText = '';
  tasks: { title: string; completed: boolean }[] = [];

  addTask() {
    if (this.taskText.trim()) {
      this.tasks.push({
        title: this.taskText,
        completed: false
      });
      this.taskText = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}

