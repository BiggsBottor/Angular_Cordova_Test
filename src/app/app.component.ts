import { Component, OnInit } from '@angular/core';
// import { CordovaService } from './_services';

declare var device: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'testCordova';

  // constructor ( private cordovaSv: CordovaService ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    document.addEventListener('deviceready', () => {
      console.log('%c testing cordova', 'color: deeppink', device.cordova);
    } , false);
  }

  onClick() {
    console.log('%c testing onClick cordova', 'color: deeppink', device.cordova);
  }

}
