import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements OnInit {

  private viewer;

  constructor(private el: ElementRef) { }


  ngOnInit(): void {
    console.log(Cesium);
    this.viewer = new Cesium.Viewer(this.el.nativeElement);
  }
}
