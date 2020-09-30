import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   username : new FormControl('Vaman'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl('')
  // });

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    firstname :[''],
    lastname : [''],
    username : [''],
    password: [''],
    confirmPassword: [''] 
  });
  ngOnInit(): void {

  }

}
