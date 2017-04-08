import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

import {UserService} from '../services/index';

import {emailValidator, matchingPasswords} from '../../app/validators/validators';
import {Router, ActivatedRoute} from "@angular/router";

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

  returnUrl: string;

  constructor(private _fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private route: ActivatedRoute)
  {
  }

  ngOnInit() {
    this.buildFrom();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signUp(sign_up_data) {
    this.userService.create(sign_up_data).subscribe(data => {
      console.log('sign up success', data);
      this.router.navigate([this.returnUrl]);
    }, error => {
      console.log('sign up error', error);
    });
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
