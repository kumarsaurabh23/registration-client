import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  name: any;
  users: any;
  constructor(private userService:UserRegistrationService) {}

  ngOnInit(): void {
    let response = this.userService.getUsers();
    response.subscribe((data:any) => this.users=data);
  }

  public deleteUser(id:number) {
    this.userService.deleteUser(id).subscribe((data:any)=> this.users=data);
  }

  public findUserByName() {
    let response = this.userService.getUserByName(this.name);
    response.subscribe((data:any)=> {
      this.users=[data];
    });
  }
}
