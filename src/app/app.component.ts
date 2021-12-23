import { Component} from '@angular/core';

export class User{
  constructor(public name: string,
              public email: string,
              public phone: string){}
}

@Component({
  selector: 'my-app',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
  template: `<div>
                    <div class="form-group">
                        <label>Имя</label>
                        <input class="form-control" name="name" [(ngModel)]="user.name" #name="ngModel" required />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" type="email" name="email" [(ngModel)]="user.email" #email="ngModel"
                            required email />
                    </div>
                    <div class="form-group">
                        <label>Телефон</label>
                        <input class="form-control" name="phone" [(ngModel)]="user.phone" #phone="ngModel"
                            required pattern="[0-9]{10}" />
                    </div>
                    <div class="form-group">
                        <button [disabled]="name.invalid || email.invalid || phone.invalid"
                                class="btn btn-default" (click)="addUser()">Добавить</button>
                    </div>
              </div>`
})
export class AppComponent {

  user: User = new User("", "", "");
  addUser(){
    console.log(this.user);
  }
}
