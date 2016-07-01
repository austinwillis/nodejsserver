import { bootstrap } from 'angular2/platform/browser';
import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

@Component({
  selector: 'app'
})
@View({
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  templateUrl: './src/app.html'
})

export class App {
  title: string;
  data: string;
  quote: string;
  username: string;
  password: string;
  randomQuote: string;
  secretQuote: string;
  buttons: JSON;

  constructor(public http: Http) {

  }

  getButtons() {
    this.http.get('http://localhost:3001/api/buttons')
    .subscribe(
      data => this.buttons = data.json(),
      err => this.logError(err.text()),
      () => console.log("Got Buttons")
    );
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

  saveJwt(jwt) {
    if(jwt) {
      localStorage.setItem('id_token', jwt)
    }
  }

  getRandomQuote() {
    this.http.get('http://localhost:3001/api/random-quote')
      .subscribe(
        data => this.randomQuote = data.text(),
        err => this.logError(err.text()),
        () => console.log('Random Quote Complete')
      );
  }

  authenticate(username, password) {

    let creds = JSON.stringify({ username: username.value, password: password.value });

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3001/sessions/create', creds, {
      headers: headers
      })
      .subscribe(
        data => {
          this.saveJwt(data.json().id_token);
          username.value = null;
          password.value = null;
        },
        err => this.logError(err.json().message),
        () => console.log('Authentication Complete')
      );
  }

  getSecretQuote() {

    let jwt = localStorage.getItem('id_token');
    let authHeader = new Headers();
    if(jwt) {
      authHeader.append('Authorization', 'Bearer ' + jwt);
    }

    this.http.get('http://localhost:3001/api/protected/random-quote', {
      headers: authHeader
    })
    .subscribe(
      data => this.secretQuote = data.text(),
      err => this.logError(err.text()),
      () => console.log('Secret Quote Complete')
    );

  }

}

bootstrap(App, [HTTP_PROVIDERS]);
