import { Component } from '@angular/core';
import * as text from '../assets/text/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public text = text;
}
