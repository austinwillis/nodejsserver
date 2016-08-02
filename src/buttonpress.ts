import { Component } from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

@Component({
  selector: 'buttonpress',
  templateUrl: './src/buttonpress.html'
})

export class Buttonpress {
  componentName: 'Buttonpress';

  constructor(public http: Http) {

  }

  pushButton(name: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(name);
    this.http.post('http://localhost:3001/api/buttonPress', JSON.stringify({ name : name }), {headers:headers}).subscribe(data => {
      console.log('Press Sent');
    }, error => {
      console.log(JSON.stringify(error.json));
    });
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }
}
