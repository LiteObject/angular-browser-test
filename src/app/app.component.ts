import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-browser-test';
  url = 'http://www.google.com';

  whiteListUrls = ['http://www.google.com'];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  onButtonClick() {
    console.log('You have clicked');

    const referrer = document.referrer;
    console.log('document.referrer: ' + referrer);

    if (this.url && this.whiteListUrls.includes(this.url)) {
      // window.location.href = '...'

      console.log('About to redirect to ' + this.url);
      this.document.location.href = this.url;
    } else {
      console.log('URL value not allowed.');
    }

  }
}
