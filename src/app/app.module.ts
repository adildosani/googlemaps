import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkerTableComponent } from './marker-table/marker-table.component';
import { CityChartComponent } from './city-chart/city-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    MarkerTableComponent,
    CityChartComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
