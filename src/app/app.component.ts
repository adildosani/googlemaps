import { Component } from '@angular/core';
import { MapsMarkerService } from './services/maps-marker.service';
import { Observable } from 'rxjs';
import { IMarkerItem } from './services/maps-marker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maps-marker';
  markers: Observable<Array<IMarkerItem>>;
  constructor(private mapsMarker: MapsMarkerService) {
    this.markers = this.mapsMarker.getMarkersData();
  }
}
