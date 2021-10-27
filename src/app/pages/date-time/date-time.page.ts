import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customYearValues = [2025, 2023, 2021, 2019, 2017];
  customPickerOptions = {
    buttons: [
      {
        text: 'hola',
        handler: ( event ) => {
          console.log( event );
        }
      },
      {
        text: 'mundo',
        handler: () => {
          console.log('log');
          
        }
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ) {
    console.log( new Date (event.detail.value) );
  }

  cus

}
