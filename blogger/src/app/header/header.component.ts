import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  constructor(private authService: AuthenticationService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    console.log('header current User', this.currentUser);
  }

  ngOnInit() {
    console.log('header ngOnInit');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
