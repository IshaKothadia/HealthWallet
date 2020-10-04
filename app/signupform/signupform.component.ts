import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {

  firstname : string;
  lastname : string;
  username :string;
  phone : number;
  password : string;
  email: string;
  confirmpassword : string;
  age : number;
  registerform: any;

  ngOnInit(): void {

  }

  onSubmit(value){
    console.table(value);
  }
}
