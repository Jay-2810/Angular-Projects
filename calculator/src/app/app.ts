import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Calc } from './calc/calc';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [FormsModule,Dashboard,Header,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculator');
  
}
