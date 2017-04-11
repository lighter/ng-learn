import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allUser: User[];

  constructor(private userSerivce: UserService) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userSerivce.getAll().subscribe(data => {
      this.allUser = data.users;
    }, error => {
      console.log(error);
    });
  }
}
