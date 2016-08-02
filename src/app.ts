import { bootstrap } from 'angular2/platform/browser';
import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';
import { Nav } from './nav';

interface Button {
  name: string;
  time: string;
}

@Component({
  selector: 'app'
})
@View({
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, Nav ],
  templateUrl: './src/app.html'
})

export class App {
  public buttons;

  constructor(public http: Http) {

  }

  ngOnInit() {
    this.getButtons();
  }

  getButtons() {
     this.http.get('http://localhost:3001/api/buttons')
     .subscribe(
       data => this.generateArray(data.json())
     );
  }

  generateArray(obj) {
    this.buttons = obj.data;
    // console.log(obj.data);
    // for (var item of obj.data) {
    //   this.buttons.push({"name" : item.name , "time" : item.time});
    // }
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }
}

bootstrap(App, [HTTP_PROVIDERS]);
