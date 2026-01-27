import { AsyncPipe } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Observable, from, interval, of, concat } from 'rxjs';
import { concatMap, delay, ignoreElements, map, repeat, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  // template: `
  //   <h1 class="typing-container">
  //     We Are The Complete Solution For Your 
  //     <span class="typewriter-text">{{ typewriterText$ | async }}</span>
  //   </h1>
  // `,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  currentWordColor='';
  titles=[
    {text: "Web Application", color: 'tomato'},
    {text: "Mobile Applications", color: 'rebeccapurple'},
    {text: "Windows Application", color: 'lightblue'},
    {text: "E-commerce", color: 'tomato'},
    {text: "Project Management", color: 'rebeccapurple'},
    {text: "Digital Marketing", color: 'lightblue'}
  ];
  typewriterText$!:Observable<string>;
  ngOnInit(){
    this.typewriterText$=from(this.titles).pipe(
      concatMap(item=>{
          this.currentWordColor=item.color
          return this.typeWriterEffect(item.text)
        }),
      repeat()
    );
  }
  typeWriterEffect(title:string){
    return concat(
      from(title).pipe(
        concatMap((char,index)=>of(title.substring(0,index+1)).pipe(delay(100)))
      ),
  
      of(title).pipe(delay(1500),ignoreElements()),
  
      from(title).pipe(
        concatMap((char,index)=>of(title.substring(0,title.length-index-1)).pipe(delay(50)))
      ),

      of("").pipe(delay(500),ignoreElements())
    );
  }

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('track') track!: ElementRef;

  scrollPercentage = 0;
  isDragging = false;
  startX = 0;
  startScrollLeft = 0;
  onScroll() {
    if (this.isDragging) return;
    this.calculatePercentage();
  }

  calculatePercentage() {
    const el = this.scrollContainer.nativeElement;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    // Use 60 because: 100% (track) - 40% (thumb width) = 60% available travel
    const percentage = (el.scrollLeft / maxScroll) * 60;
    this.scrollPercentage = Math.min(Math.max(percentage, 0), 60);
  }

  // 2. Dragging Logic
  startDragging(e: any) { 
    this.isDragging = true;
    // This will work for MouseEvents without triggering Touch errors
    this.startX = e.pageX || (e.touches && e.touches[0].pageX);
    this.startScrollLeft = this.scrollContainer.nativeElement.scrollLeft;
  }
  @HostListener('window:touchmove', ['$event'])
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: any) {
    if (!this.isDragging) return;

    // Smoothly calculate X regardless of Mouse or Touch
    const currentX = e.pageX || (e.touches && e.touches[0].pageX);
    const deltaX = currentX - this.startX;
    
    const trackWidth = this.track.nativeElement.clientWidth;
    const scrollEl = this.scrollContainer.nativeElement;
    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;

    // Movement math: (Movement / TrackSpace) * ContentSize
    // Use 0.6 if thumb is 40% wide to ensure it reaches the end
    const scrollMovement = (deltaX / (trackWidth * 0.6)) * maxScroll;
    scrollEl.scrollLeft = this.startScrollLeft + scrollMovement;
    
    this.calculatePercentage();
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  stopDragging() {
    this.isDragging = false;
  }

  // 3. Jump to position on click
  onTrackClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('scroll-thumb')) return;
    
    const trackRect = this.track.nativeElement.getBoundingClientRect();
    const clickPos = (e.clientX - trackRect.left) / trackRect.width;
    const scrollEl = this.scrollContainer.nativeElement;
    
    scrollEl.scrollLeft = clickPos * (scrollEl.scrollWidth - scrollEl.clientWidth);
    this.calculatePercentage();
  }
}
