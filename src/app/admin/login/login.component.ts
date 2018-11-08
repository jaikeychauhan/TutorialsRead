import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(e)
  {
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(username+ " " +password);
  }
}
