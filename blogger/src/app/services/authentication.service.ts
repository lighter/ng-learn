import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {

  constructor(private http: Http) {}

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({
      username: username,
      password: password
    })).map((response: Response) => {
      console.log(response);
      let user = response.json();
    });
  }

  logout() {
    console.log('logout');
  }

}