import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {emailValidator} from "../validators/validators";

import {AuthenticationService} from "../services/index";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  returnUrl: string;

  constructor(private  _fb: FormBuilder,
              private authService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.authService.logout();

    this.buildForm();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signIn(sign_in_data) {
    this.authService.login(sign_in_data.email, sign_in_data.password).subscribe(data => {
      console.log('sign in', data);
      this.router.navigate([this.returnUrl]);
    }, error => {
      console.log('sign in error', error);
    })
    ;
  }

  buildForm(): void {
    this.signInForm = this._fb.group({
      'email': ['', [Validators.required, emailValidator]],
      'password': ['', [Validators.required]]
    });

    this.email = this.signInForm.controls['email'];
    this.password = this.signInForm.controls['password'];
  }

}
