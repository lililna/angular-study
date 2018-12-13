import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#dg-container').gallery({
      autoplay	:	true
    });
  }

}
