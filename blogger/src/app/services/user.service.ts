import { Injectable } from '@angular/core';

import { User } from './../models/user';
import {Http, Response, ResponseOptions, Headers} from "@angular/http";

@Injectable()

export class UserService {

  constructor(private http: Http) { }

  getById(id:number) {
    return this.http.get(`/api/users/${id}`, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(`/api/users/${user.id}`, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(`/api/users/${id}`, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new ResponseOptions({ 'headers': headers });
    }
  }
}
