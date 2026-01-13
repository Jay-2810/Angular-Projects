import { Component } from '@angular/core';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router:Router){}
}
