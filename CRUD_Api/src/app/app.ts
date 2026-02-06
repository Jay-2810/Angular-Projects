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
  selectedId: number | null = null;
  // friend: Friend = {
  //   name: '',
  //   age: 0,
  //   address: '',
  //   email: ''
  // };
  friends= signal<Friend[]>([]);
  apiUrl="https://localhost:44397/api/Friends";
  http=inject(HttpClient);
  
  ngOnInit() {
    this.getAllFriends();
  };
  getAllFriends(){
    this.http.get<Friend[]>(this.apiUrl).subscribe({
      next: (data)=>{
        this.friends.set(data);
        console.log("Data Recieved",this.friends());
      },
      error: (error)=>{
        console.error("Error Occured",error);
      }
    });
  }
  clearForm(){
    this.selectedId = null;
    this.name = '';
    this.age = '';
    this.address = '';
    this.email = '';
  }
  onSave() {
    const newFriend: Friend = {
      name: this.name,
      age: Number(this.age),
      address: this.address,
      email: this.email
    };
    if(this.selectedId){
      this.http.put(`${this.apiUrl}/${this.selectedId}`,newFriend).subscribe({
        next:(res)=>{
          alert('Updated');
          this.getAllFriends(); 
          this.clearForm();
        },
        error:(err)=>{
          console.error('Error updating friend', err);
        }
      })
    }
    else{
      if(!this.name || !this.age || !this.address || !this.email){
        alert("Please fill all fields");
        return;
      } else{
        this.http.post(this.apiUrl, newFriend).subscribe({
          next: (res) => {
            alert('Friend added successfully!');
            this.getAllFriends(); // Refresh the list
            this.clearForm();     // Clear inputs
          },
          error: (err) => console.error('Error adding friend', err)
        });
      }
    }
  }
  onDelete(id?:number){
    if(!id) return;

    if(!confirm("Are you sure you want to delete this friend?")) return;
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next:(res)=>{
        alert('Friend deleted successfully!');
        this.getAllFriends();
      },
      error:(err)=>{
        console.error("Error deleting friend",err);
    }});
  }
  onEdit(friend:Friend){
    this.selectedId=friend.id || null;
    this.name=friend.name;
    this.age=friend.age.toString();
    this.address=friend.address;
    this.email=friend.email;
  }
}

export interface Friend {
  id?: number;
  name: string;
  age: number;
  address: string;
  email: string;
}