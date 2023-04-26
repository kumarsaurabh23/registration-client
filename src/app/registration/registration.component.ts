import { Component } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user: User=new User(0, "", "");
  message: any;

  constructor(private userService:UserRegistrationService) {}

  public registerNow() {
    let response = this.userService.doRegistration(this.user);
    response.subscribe((data: any) => this.message = data);
  }
}
