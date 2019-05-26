import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  chart;

  constructor(private reservationService : ReservationService) {
    this.chart = new Chart({
      chart: {
        type: 'line',
        style: {
          fontFamily: 'roboto'
        }
      },
      title: {
        text: 'Annual Report'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: null
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: '# of reservations',
          data: [],
          type: "line"
        }
      ]
    });
  }

  ngOnInit() {
    this.update();
  }

  update() {
    this.reservationService.getStatistics().subscribe(
      (res : any[]) => {
        console.log(res['data']);
        for (const data of res['data']) this.add(+data);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  add(count) {
    this.chart.addPoint(count);
  }

}
