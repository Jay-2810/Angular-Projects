import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  public api_url="https://localhost:44388";
  http=inject(HttpClient);
  tours=signal<any[]>([]);
  ngOnInit() {
    this.http.get<any>(this.api_url+"/GetAllTours").subscribe({
      next: (res)=>{
        const parsedData = JSON.parse(res.data);
        this.tours.set(parsedData.Table);
        console.log("Raw API response:", res);
        console.log("Tours array:", parsedData.Table);
        console.log("Signal value:", this.tours());
      },
      error: (error)=>{
        console.error("Error Occured",error);
      }
    });
  }
}

export interface Tour {
  tour_id?: number;
  created_by_user_id?: number;
  destination: string;
  duration: string;
  base_price: number;
  tour_name: string;
  tour_image?: string;
}