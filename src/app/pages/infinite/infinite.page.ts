import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data=Array(20);

  @ViewChild( IonInfiniteScroll ) InfiniteSroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){

    console.log(event);
    
    if ( this.data.length > 50 ) {
      this.InfiniteSroll.complete();
      this.InfiniteSroll.disabled = true;
      return;

    }

    setTimeout(() =>{

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr);

      this.InfiniteSroll.complete();
    }, 1500);

  }

}
