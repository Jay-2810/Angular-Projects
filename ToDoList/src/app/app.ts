import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoComponent } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ToDoList');
}
