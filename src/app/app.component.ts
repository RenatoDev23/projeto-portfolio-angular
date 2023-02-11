import { Component, Output, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Output() informacao= "index.html";

  userName = 'joaquim';
  title = 'moments';
}
