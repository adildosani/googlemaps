import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IMarkerItem } from '../services/maps-marker.interface';
import {
  Label,
  SingleDataSet,
  monkeyPatchChartJsTooltip,
  monkeyPatchChartJsLegend
} from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-city-chart',
  templateUrl: './city-chart.component.html',
  styleUrls: ['./city-chart.component.css']
})
export class CityChartComponent implements OnInit, OnChanges {
  @Input() markers: Array<IMarkerItem>;
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [{ backgroundColor: [] }];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.markers && this.markers) {
      let rest = 0;
      this.groupByArray(this.markers, 'city').map(r => {
        if (r.values.length > 10) {
          this.pieChartData.push(r.values.length);
          this.pieChartLabels.push(r.key);
          this.pieChartColors[0].backgroundColor.push(
            `rgba(${r.values.length * 10},${r.values.length * 5},${
              r.values.length
            }, 1)`
          );
        } else {
          rest += r.values.length;
        }
      });
      this.pieChartData.push(rest);
      this.pieChartLabels.push('Others');
      console.log(this.pieChartData);
    }
  }
  ngOnInit() {}
  groupByArray(xs, key) {
    return xs.reduce((rv, x) => {
      const v = key instanceof Function ? key(x) : x[key];
      const el = rv.find(r => r && r.key === v);
      if (el) {
        el.values.push(x);
      } else {
        rv.push({ key: v, values: [x] });
      }
      return rv;
    }, []);
  }
}
