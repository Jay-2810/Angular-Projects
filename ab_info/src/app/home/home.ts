import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
}
