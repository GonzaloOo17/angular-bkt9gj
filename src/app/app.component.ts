import { Component } from '@angular/core';
import { HeaderComponent } from './common-files/header.component';
import { ARTICLES } from './mock-articles';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular';

  articles = ARTICLES;

  

}
