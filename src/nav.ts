import { bootstrap } from 'angular2/platform/browser';
import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'navcomp'
})
@View({
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  templateUrl: './src/nav.html'
})

export class Nav {
  constructor() {}
}
