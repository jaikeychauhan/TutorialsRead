import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service'
import { UsersModule } from 'src/app/users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, 
    private userService:UserService) 
    {

    }
  ngOnInit(){}

  loginUser(e)
  {
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    if(username=="admin" && password=="admin"){
    this.userService.setUserLoggedIn();
    this.router.navigate(['/dashboard']);
    }
    return false;
  }
}
