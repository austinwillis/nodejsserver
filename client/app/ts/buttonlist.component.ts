import {Component} from 'angular2/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'buttonlist',
    templateUrl: 'app/templates/buttonlist.component.html'
})

export class ButtonList {
  public buttons;

  constructor(private http: Http) {}

  ngOnInit() {
    this.getButtons();
  }

  getButtons() {
    this.http.get('http://localhost:3000/api/buttons')
      .map((res.Response) => res.json())
      .subscribe(
        data => { this.buttons = data },
        err => console.error(err),
        () => console.log('done')
      );
  }
}
