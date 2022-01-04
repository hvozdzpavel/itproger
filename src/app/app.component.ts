import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  login: string = '';
  password: string = '';


  submit() {
    console.log(this.login);
    console.log(this.password);
  }
}

