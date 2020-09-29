import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  
  Loginform;
  ngOnInit(): void {
    this.Loginform = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
  }
  onSubmit(){
  console.log(this.Loginform.value);
  }

}
