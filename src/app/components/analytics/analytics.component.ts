import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ReservationService } from 'src/app/services/reservation.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  chart; rating; reviews = [];

  constructor(private reservationService : ReservationService, private reviewService : ReviewService) {
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
    this.rating = new Chart({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      colors: ['#2a4d69', '#4b86b4', '#adcbe3', '#e7eff6', '#63ace5',
               '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
      title: {
          text: null
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true,
              slicedOffset: 0
          }
      },
      series: [{
        name: 'Brands',
        type: 'pie',
        colorByPoint: true,
        data: [{
          name: '5',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: '4',
          y: 17.9
        }, {
          name: '3',
          y: 11.84
        }, {
          name: '2',
          y: 4.67
        }, {
          name: '1',
          y: 4.18
        }]
      }]
    });
  }

  ngOnInit() {
    this.update();
    this.getReviews();
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

  getReviews(): void {
    this.reviewService.getReviews().subscribe(
      (res: any[]) => {
        console.log(res);
        this.reviews = res['data'];
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
