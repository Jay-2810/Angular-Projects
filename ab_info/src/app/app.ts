import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,FontAwesomeModule, LightboxModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('ab_info');
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
