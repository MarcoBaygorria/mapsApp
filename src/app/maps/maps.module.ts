import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiYmF5Z29ycmlhIiwiYSI6ImNsd250c2IyNjJkamIyaHFydm1hNjR6em4ifQ.ezuuUpHHR1-c51i2ub85Bg';


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/miniMap/miniMap.component';
import { SideMenuComponent } from './components/sideMenu/sideMenu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';



@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
