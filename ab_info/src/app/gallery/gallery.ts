import { Component } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-gallery',
  imports: [NgFor, NgIf],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  selectedCategory: string = 'all';
  images = [
    { url: '/assets/images/festival-01.jpeg', category: 'festival' },
    { url: '/assets/images/festival-02.jpeg', category: 'festival' },
    { url: '/assets/images/festival-03.jpeg', category: 'festival' },
    { url: '/assets/images/festival-04.jpeg', category: 'festival' },
    { url: '/assets/images/festival-05.jpeg', category: 'festival' },
    { url: '/assets/images/festival-06.jpeg', category: 'festival' },
    { url: '/assets/images/picnic-01.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-02.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-03.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-04.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-05.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-06.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-07.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-08.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-09.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-10.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-12.jpeg', category: 'picnic' },
    { url: '/assets/images/picnic-13.jpg', category: 'picnic' },
    { url: '/assets/images/picnic-14.jpeg', category: 'picnic' },
    { url: '/assets/images/sport-01.jpeg', category: 'sport' },
    { url: '/assets/images/sport-02.jpeg', category: 'sport' },
    { url: '/assets/images/sport-03.jpeg', category: 'sport' },
    { url: '/assets/images/sport-04.jpeg', category: 'sport' },
  ];
  setCategory(category: string) {
    this.selectedCategory = category;
  }
  
}
