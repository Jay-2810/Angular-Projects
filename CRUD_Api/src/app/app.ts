import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('CRUD_Api');
  name = '';
  age = '';
  address = '';
  email = '';
  // friend: Friend = {
  //   name: '',
  //   age: 0,
  //   address: '',
  //   email: ''
  // };
  friends: Friend[] = [];
  
  http=inject(HttpClient);

  ngOnInit() {
    this.getAllFriends();
  };
  getAllFriends(){
    this.http.get<Friend[]>("https://localhost:44397/api/Friends").subscribe((result)=>{
      setTimeout(() => {
        this.friends=result;
      console.log(this.friends);
      }, 1000);
    });
  }

}

export interface Friend {
  id?: number;
  name: string;
  age: number;
  address: string;
  email: string;
}