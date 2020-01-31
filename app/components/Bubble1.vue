<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  data () {
    return {
      data: {
        datasets: [
          {
            backgroundColor: 'rgba(255, 204, 0, 0.4)', // 塗り潰しの色
            borderColor: 'rgba(255, 204, 0, 1)', // 線の色
            pointBackgroundColor: 'rgba(255, 204, 0, 1)', // 点の塗り潰しの色
            pointHitRadius: 20,
            pointStyle: 'circle',
            pointRadius: 2,
            data: [
              {
                x: 100,
                y: 0,
                r: 10
              },
              {
                x: 60,
                y: 30,
                r: 20
              },
              {
                x: 40,
                y: 60,
                r: 25
              },
              {
                x: 80,
                y: 80,
                r: 50
              },
              {
                x: 20,
                y: 30,
                r: 25
              },
              {
                x: 0,
                y: 100,
                r: 5
              }
            ]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 200
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
