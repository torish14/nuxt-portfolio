<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  data () {
    return {
      data: {
        datasets: [
          {
            backgroundColor: 'rgba(68, 0, 0, 0.4)', // 塗り潰しの色
            borderColor: 'rgba(68, 0, 0, 1)', // 線の色
            pointBackgroundColor: 'rgba(68, 0, 0, 1)', // 点の塗り潰しの色
            data: [
              {
                x: 100,
                y: 0,
                r: 5
              },
              {
                x: 45,
                y: 30,
                r: 30
              },
              {
                x: 40,
                y: 60,
                r: 25
              },
              {
                x: 60,
                y: 80,
                r: 5
              },
              {
                x: 20,
                y: 30,
                r: 25
              },
              {
                x: 0,
                y: 10,
                r: 35
              }
            ]
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            stacked: false,
            ticks: {
              min: 0,
              max: 100,
              fontColor: 'white'
            },
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            display: true,
            stacked: false,
            ticks: {
              min: 0,
              max: 300,
              fontColor: 'white'
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
        height: 100,
        width: 100,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
