import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: []
})
export class AddUserComponent implements OnInit {
user: User;
  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
     form.reset();
      this.user={
      UserName:'',
      Password:'',
      Email:'',
      FirstName:'',
      LastName:''
    }
  }

  }
}
