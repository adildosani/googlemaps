import { TestBed } from '@angular/core/testing';

import { MapsMarkerService } from './maps-marker.service';

describe('MapsMarkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapsMarkerService = TestBed.get(MapsMarkerService);
    expect(service).toBeTruthy();
  });
});
