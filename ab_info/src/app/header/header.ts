import { Component, OnInit } from '@angular/core';
import { Router,RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{
  constructor(private router:Router){}
  isMenuOpen=false;
  isHomePage:boolean=false;
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd)).subscribe((event:any)=>{
        this.isHomePage=event.url==='/';
      });
  }
  menuToggle(){
    this.isMenuOpen=!this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
