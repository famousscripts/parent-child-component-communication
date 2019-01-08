import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';
  inputVar = "Hi i am parent component";
  getdata(val) {
    console.log(val);
  }
}
