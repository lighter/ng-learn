import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { emailValidator, matchingPasswords } from '../../app/validators/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  emailPattern = '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  constructor(private _fb: FormBuilder) {
    this.signUpForm = this._fb.group({
      'email': ['', Validators.compose([Validators.required,  emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'confirm_password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    }, {validator: matchingPasswords('password', 'confirm_password')});
  }

  ngOnInit() {}

  onSubmit(sign_up_data) {
    console.log(sign_up_data);
  }

}
