import {Component} from 'angular2/core';
import {ButtonList} from './buttonlist.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/main.component.html',
    directives: [ButtonList]
})

export class AppComponent {
  buttonList;

  constructor() {
    this.buttonList = new ButtonList();
  }
}
