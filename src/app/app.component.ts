import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bwl';
  public logged: boolean;
  public login: string;


  constructor() {

    localStorage.setItem('login', this.login = 'login');
    if(this.login === 'login') {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

}
