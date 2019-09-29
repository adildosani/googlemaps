import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMarkerItem } from './maps-marker.interface';

@Injectable({
  providedIn: 'root'
})
export class MapsMarkerService {
  constructor(private http: HttpClient) {}

  getMarkersData() {
    return this.http.get<Array<IMarkerItem>>('assets/marker-data.json');
  }
}
