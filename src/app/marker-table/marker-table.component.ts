import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IMarkerItem } from '../services/maps-marker.interface';

@Component({
  selector: 'app-marker-table',
  templateUrl: './marker-table.component.html',
  styleUrls: ['./marker-table.component.css']
})
export class MarkerTableComponent implements OnInit, OnChanges {
  @Input() markers: Array<IMarkerItem>;
  groupedMarkers;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.markers && this.markers) {
      this.groupedMarkers = this.markers.slice(0, 10); // show first 10 instead of standard and sub-standard
    }
  }

  // implement filter using this -> https://offering.solutions/blog/articles/2016/11/21/how-to-implement-a-table-filter-in-angular/
}
