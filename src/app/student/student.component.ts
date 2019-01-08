import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  @Input() myinput: string;  // variable declare
  @Output() myoutput: EventEmitter<string> = new EventEmitter();
  outputstring = 'Hi i am from child component';
  constructor() { }

  ngOnInit() {
    console.log(this.myinput); // variable comming from parent
  }
  senddata() {
  this.myoutput.emit(this.outputstring);
  }

}
