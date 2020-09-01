import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  chart = [];
  MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  region_list = [];
  selected_region: string;
  update_data: any;
  maxT = [];
  minT = [];
  meanT = [];
  years = [];
  sel_year: string;

  constructor(
    private weatherService: WeatherService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
     this.weatherService.getRegions().subscribe(reg_data => {
        this.region_list = reg_data['regions'];
      });
      this.refreshClimateChart([], [], []);
    })
  }

  onRegionChange() {
    this.weatherService.getYears().subscribe(y_data => {
      this.years = y_data['years'];
    });
  }

  onYearChange() {
    let url_api = "https://uk-climate-api.herokuapp.com/temperature/" + this.selected_region + "/" + this.sel_year;
   this.weatherService.getTemperature(url_api).subscribe(temp_data => {
      this.refreshClimateChart(temp_data['Tmin'], temp_data['Tmax'], temp_data['Tmean']);
    });
  }

  refreshClimateChart(minT, maxT, meanT) {
    //start test code
    var time_series = this.MONTHS;
    var chart_options = chart_options;
    var all_data_sets = {
      labels: time_series,
      // Start dataset
      datasets: [
        {
          label: "Min",
          fill: true,
          backgroundColor: "rgba(0, 191, 255, 0.2)",
          borderColor: "#29b6f6",
          data: minT
        },
        {
          label: "Mean",
          fill: false,
          backgroundColor: "#424242",
          borderColor: "#424242",
          data: meanT
        },
        {
          label: "Max",
          fill: true,
          backgroundColor: "rgba(255, 209, 128,0.2)",
          borderColor: "#ffd180",
          data: maxT
        }]
    };

    this.chart = new Chart('weather-chart', { type: 'line', data: all_data_sets, options: chart_options });
  }

}
