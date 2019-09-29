export interface IMarkerItem {
  id: string;
  fuel_type_code: string;
  station_name: string;
  street_address: string;
  intersection_directions: string;
  city: string;
  state: string;
  zip: string;
  station_phone: string;
  status_code: string;
  groups_with_access_code: string;
  access_days_time: string;
  cards_accepted: string;
  geocode_status: string;
  latitude: string;
  longitude: string;
  date_last_confirmed: string;
  updated_at: string;
  owner_type_code: string;
  lpg_primary: string;
  location: { latitude: string; longitude: string };
  ':@computed_region_6mkv_f3dw': string;
}
