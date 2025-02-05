import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './miniMap.component.html',
  styleUrls: ['./miniMap.component.css']
})
export class MiniMapComponent {

  @ViewChild('map') divMap?: ElementRef;
  @Input() lngLat?: [number, number];

  ngAfterViewInit() {
    if (!this.divMap?.nativeElement) throw "Map div not found"
    if (!this.lngLat) throw "LngLat cant be null"

    //mapa
    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    //marcador
    new Marker()
      .setLngLat(this.lngLat)
      .addTo(map)
  }

}
