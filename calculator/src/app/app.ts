import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculator');
  input:string="";
  result:string="";
  pressNum(num:string){
    if(num=='.'){
      if(this.input!=""){
        const lastNum=this.extractLastNumber();
        console.log(lastNum);
        if(lastNum && lastNum.lastIndexOf('.')>=0)
          return;
      }
    }
    if(num=='0'){
      if(this.input==""){
        return;
      }
      const lastInd=this.input[this.input.length-1];
      if(lastInd=='+' || lastInd=='-' || lastInd=='/' || lastInd=='*')
        return; 
    }
    this.input=this.input+num;
  }
  extractLastNumber():string|null{
    // const numbers=this.input.match('[+\-\*\/\]\d+(\.\d+)?')
    // if(numbers && numbers.length>0){
    //   const lastNum=numbers[numbers.length-1];
    //   return lastNum;
    // }
    // return null;
    let ind=this.input.lastIndexOf("+");
    if(this.input.lastIndexOf("-")>ind)
      ind=this.input.lastIndexOf("-");
    if(this.input.lastIndexOf("/")>ind)
      ind=this.input.lastIndexOf("/");
    if(this.input.lastIndexOf("*")>ind)
      this.input.lastIndexOf("*");
    if(ind)
      return this.input.substr(ind+1);
    return this.input;
  }
  pressOp(op:string){
    const lastInd=this.input[this.input.length-1];
    if(lastInd=='+' || lastInd=='-' || lastInd=='*' || lastInd=='/')
      return;
    this.input=this.input+op;
  }
  allClear(){
    this.input="";
    this.result="";
  }
  clear(){
    if(this.input!="")
      this.input=this.input.substr(0,this.input.length-1);
  }
  answer(){
    let lastInd=this.input[this.input.length-1];
    while(lastInd==='.' || lastInd==='+' || lastInd==='-' || lastInd==='/' || lastInd==='*')
    {
      this.input=this.input.substr(0,this.input.length-1);
      lastInd=this.input[this.input.length-1];
    }
    this.result=eval(this.input);
    this.input=this.result;
  }
  getAnswer(){
    this.answer();
    this.input=this.result;
  }
}
