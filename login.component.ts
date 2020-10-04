import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;
  loginform: any;

  

  constructor() { }

 
  ngOnInit(): void {
  }
  onSubmit(value){
    console.log(value)
  }

  

  
  
}
