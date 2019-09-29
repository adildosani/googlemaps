import { Component, OnInit, Input } from '@angular/core';
import { IMarkerItem } from '../services/maps-marker.interface';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Input() markers: Array<IMarkerItem>;
  zoomFactor = 2;
  constructor() {}

  ngOnInit() {}
}
