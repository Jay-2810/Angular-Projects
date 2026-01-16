import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-starpattern',
  imports: [FormsModule, NgFor],
  templateUrl: './starpattern.html',
  styleUrl: './starpattern.css',
})
export class Starpattern {
  rows: number = 5;
  leftTriangle: string[] = [];
  rightTriangle: string[] = [];
  lowerLeftTriangle: string[] = [];
  lowerRightTriangle: string[] = [];
  hollowLeftTriangle: string[] = [];
  hollowLowerLeftTriangle: string[] = [];
  hollowRightTriangle: string[] = [];
  hollowLowerRightTriangle: string[] = [];
  pyramid:string[]=[];
  invertedPyramid:string[]=[];
  hollowPyramid:string[]=[];
  diamond:string[]=[];
  hollowDiamond:string[]=[];
  square:string[]=[];
  hollowSquare:string[]=[];
  rightArrow:string[]=[];
  leftArrow:string[]=[];
  plusSign:string[]=[];
  rhombus:string[]=[];
  crossStar:string[]=[];
  butterfly:string[]=[];
  hollowButterfly:string[]=[];
  triangle:string[]=[];
  hollowTriangle:string[]=[];
  hollowReverseTriangle:string[]=[];
  hollowHourGlass:string[]=[];
  ngOnInit() {
    // Left Triangle
    for (let i = 1; i <= this.rows; i++) {
      this.leftTriangle.push("* ".repeat(i));
    }
    console.log(this.leftTriangle);
    // Right Triangle
    for (let i = 1; i <= this.rows; i++) {
      const space = '  '.repeat(this.rows - i);
      const star = '* '.repeat(i);
      const st = space + star;
      this.rightTriangle.push(st);
    }
    console.log(this.rightTriangle);
    // Lower Left Triangle
    for (let i = this.rows; i >= 1; i--) {
      const space = '  '.repeat(this.rows - i);
      const star = '* '.repeat(i);
      this.lowerLeftTriangle.push(star + space);
    }
    // Lower Right Triangle
    for (let i = this.rows; i >= 1; i--) {
      const space = '  '.repeat(this.rows - i);
      const star = '* '.repeat(i);
      this.lowerRightTriangle.push(space + star);
    }
    // Hollow Left Triangle
    for (let i = 1; i <= this.rows; i++) {
      let st = "";
      for (let j = 1; j <= i; j++) {
        if (j === 1 || i === this.rows || j === i) {
          st += "* ";
        } else {
          st += "  ";
        }
      }
      this.hollowLeftTriangle.push(st);
    }
    // Hollow Lower Left Triangle
    for (let i = this.rows; i >= 1; i--) {
      let st = "";
      for (let j = 1; j <= i; j++) {
        if (j===1 || j===i || i===this.rows){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowLowerLeftTriangle.push(st);
    }
    // Hollow Right Triangle
    for(let i=1;i<=this.rows;i++){
      let st="";
      for(let j=1;j<=this.rows;j++){
        if(j===this.rows || i===this.rows || j===this.rows-i+1){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowRightTriangle.push(st);
    }
    // Hollow Lower Right Triangle
    for(let i=1;i<=this.rows;i++){
      let st="";
      for(let j=1;j<=this.rows;j++){
        if(i===1 || j===this.rows || j===i){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowLowerRightTriangle.push(st);
    }
    // Pyramid
    for(let i=1;i<=this.rows;i++)
    {
      let st="";
      st+="  ".repeat(this.rows-i);
      st+="* ".repeat(2*i-1);
      this.pyramid.push(st);
    }
    // Inverted Pyramid
    for(let i=this.rows;i>=1;i--)
    {
      let st="";
      st+="  ".repeat(this.rows-i);
      st+="* ".repeat(2*i-1);
      this.invertedPyramid.push(st);
    }
    // Hollow Pyramid
    for(let i=1;i<=this.rows;i++){
      let st="";
      st+="  ".repeat(this.rows-i);
      for(let j=1;j<=2*i-1;j++){
        if(i===this.rows || j===1 || j===2*i-1){
          st+="* ";
        } else {
          st+="  ";
        }
      }
      this.hollowPyramid.push(st);
    }
    // Daimond
    for(let i=1;i<=2*this.rows-1;i++){
      let st="";
      if(i<=this.rows){
        st+="  ".repeat(this.rows-i);
        st+="* ".repeat(2*i-1);
      } else{
        st+="  ".repeat(i%this.rows);
        st+="* ".repeat(2*(this.rows-i%this.rows)-1);
      }
      this.diamond.push(st);  
    }
    // Hollow Daimond
    // for(let i=1;i<=2*this.rows-1;i++){
    //   let st="";
    //   st+="  ".repeat(Math.abs(this.rows-i));
    //   for(let j=1;j<=2*this.rows-1;j++){
    //     if(j===1 || j===(2*i-1)%this.rows){
    //       st+="* ";
    //     } else{
    //       st+="  ";
    //     }
    //   }
    // Upper
    for(let i=1;i<=this.rows;i++){
      let st="";
      st+="  ".repeat(this.rows-i);
      for(let j=1;j<=2*i-1;j++){
        if(j===1 || j===2*i-1){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowDiamond.push(st);
    }
    // Lower
    for(let i=this.rows-1;i>=1;i--){
      let st="";
      st+="  ".repeat(this.rows-i);
      for(let j=1;j<=2*i-1;j++){
        if(j===1 || j===2*i-1){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowDiamond.push(st);
    }
    // Square Pattern
    for(let i=1;i<=this.rows;i++){
      let st="* ".repeat(this.rows);
      this.square.push(st);
    }
    // Square Pattern
    for(let i=1;i<=this.rows;i++){
      let st="";
      for(let j=1;j<=this.rows;j++){
        if(i==1 || i===this.rows || j===1 || j===this.rows){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowSquare.push(st);
    }
    // Right Arrow
    for(let i=1;i<=2*(this.rows)-1;i++){
      let st="";
      if(i<=this.rows){
        st="*".repeat(i);
      } else{
        st="*".repeat(this.rows-(i%this.rows));
      }
      this.rightArrow.push(st);
    }
    // Left Arrow
    for(let i=1;i<=2*this.rows-1;i++){
      let st="";
      if(i<=this.rows){
        st+=" ".repeat(this.rows-i);
        st+="*".repeat(i);
      } else{
        st+=" ".repeat(Math.abs(this.rows-i));
        st+="*".repeat(this.rows-i%this.rows);
      }
      this.leftArrow.push(st);
    }
    // Plus Sign
    for(let i=1;i<=this.rows;i++){
      let st="";
      let mid=Math.floor(this.rows/2)+1
      for(let j=1;j<=this.rows;j++){
        if(i===mid || j===mid){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.plusSign.push(st);
    }
    // Rhombus Pattern
    for(let i=1;i<=this.rows;i++){
      let st="";
      st+=" ".repeat(this.rows-i);
      st+="*".repeat(this.rows);
      this.rhombus.push(st);
    }
    // Cross Star
    for(let i=1;i<=this.rows;i++){
      let st="";
      for(let j=1;j<=this.rows;j++){
        if(i===j || j===this.rows-i+1){ // if start from 0 then j===this.rows-i-1
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.crossStar.push(st);
    }
    // Butterfly Pattern
    // Upper Wings
    for(let i=1;i<=this.rows;i++){
      let st="";
      st+="*".repeat(i);
      st+=" ".repeat(2*(this.rows-i));
      st+="*".repeat(i);
      this.butterfly.push(st);
    }
    //Lower Wings
    for(let i=this.rows;i>=1;i--){
      let st="";
      st+="*".repeat(i);
      st+=" ".repeat(2*(this.rows-i));
      st+="*".repeat(i);
      this.butterfly.push(st);
    }
    // Hollow Butterfly
    for(let i=1;i<=2*this.rows;i++){
      let st="";
      for(let j=1;j<=2*this.rows;j++){
        if(j===1 || j===2*this.rows || i===j || j===2*this.rows-i+1){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowButterfly.push(st);
    }
    // Triangle
    for(let i=1;i<=this.rows;i++){
      let st="";
      st+=" ".repeat(this.rows-i);
      st+="* ".repeat(i);
      this.triangle.push(st);
    }
    // Hollow Triangle
    for(let i=1;i<=this.rows;i++){
      let st="";
      st+=" ".repeat(this.rows-i);
      for(let j=1;j<=i;j++){
        if(j===1 || j===i || i===this.rows){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowTriangle.push(st);
    }
    // Hollow Reverse Triangle
    for(let i=this.rows;i>=1;i--){
      let st="";
      st+=" ".repeat(this.rows-i);
      for(let j=1;j<=i;j++){
        if(j===1 || j===i || i===this.rows){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowReverseTriangle.push(st);
    }
    // Hollow Hour Glass
    // Upper part
    for(let i=this.rows;i>=1;i--){
      let st="";
      st+=" ".repeat(this.rows-i);
      for(let j=1;j<=i;j++){
        if(j===1 || j===i || i===this.rows){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowHourGlass.push(st);
    }
    // Lower Part
    for(let i=2;i<=this.rows;i++){
      let st="";
      st+=" ".repeat(this.rows-i);
      for(let j=1;j<=i;j++){
        if(j===1 || j===i || i===this.rows){
          st+="* ";
        } else{
          st+="  ";
        }
      }
      this.hollowHourGlass.push(st);
    }
  }
}