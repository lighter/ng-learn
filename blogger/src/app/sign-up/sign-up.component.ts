import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

import {emailValidator, matchingPasswords} from '../../app/validators/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  confirm_password: AbstractControl;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildFrom();
  }

  onSubmit(sign_up_data) {
    console.log(sign_up_data);
  }

  buildFrom(): void {
    this.signUpForm = this._fb.group(
      {
      'email': ['', [Validators.required, emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(5)]],
      'confirm_password': ['', [Validators.required, Validators.minLength(5)]]
      },
      {validator: matchingPasswords('password', 'confirm_password')});

    this.email = this.signUpForm.controls['email'];
    this.password = this.signUpForm.controls['password'];
    this.confirm_password = this.signUpForm.controls['confirm_password'];
  }

}
