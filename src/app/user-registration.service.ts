import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user:User) : any {
    return this.http.post("http://localhost:8080/register", user, {responseType:'text' as 'json'});
  }

  public getUsers() : any {
    return this.http.get("http://localhost:8080/findAllUsers");
  }

  public getUserByName(name:string) : any {
    return this.http.get("http://localhost:8080/findByName/"+name);
  }

  public deleteUser(id:number) {
    return this.http.delete("http://localhost:8080/cancel/"+id);
  }

}
