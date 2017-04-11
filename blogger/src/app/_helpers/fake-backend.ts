import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  RequestMethod,
  XHRBackend,
  RequestOptions
} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

  let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

  backend.connections.subscribe((connection: MockConnection) => {

    setTimeout(() => {
      console.log(connection.request.url);
      console.log(connection.request.method);

      // ===== login =====
      if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
        let params = JSON.parse(connection.request.getBody());

        let filterUsers = users.filter(user => {
          return user.email === params.email && user.password === params.password;
        });

        if (filterUsers.length) {
          let user = filterUsers[0];

          connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: {
              id: user.id,
              email: user.email,
              token: 'fake-jwt-token'
            }
          })));
        }
        else {
          connection.mockError(new Error('Username or password is incorrect'));
        }

        return;
      }
      // end login

      // ===== sign up ======
      if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
        let newUser = JSON.parse(connection.request.getBody());

        let duplicateUser = users.filter(user => {return user.email === newUser.email}).length;

        if (duplicateUser) {
          return connection.mockError(new Error(`Email ${newUser.email} is already taken.`));
        }

        newUser.id = users.length + 1;
        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        connection.mockRespond(new Response(new ResponseOptions({status: 200})));

        return;
      }
      // end sign up


      // ===== get all user =====
      if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: {
            users: users
          }
        })));
      }
      // ===== end get all user =====

      let realHttp = new Http(realBackend, options);
      let requestOptions = new RequestOptions({
        method: connection.request.method,
        headers: connection.request.headers,
        body: connection.request.getBody(),
        url: connection.request.url,
        withCredentials: connection.request.withCredentials,
        responseType: connection.request.responseType
      });

      realHttp.request(connection.request.url, requestOptions).subscribe((response: Response) => {
          connection.mockRespond(response);
        },
        (error: any) => {
          connection.mockError(error);
        });

    }, 200);
  });

  return new Http(backend, options);
};

export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
