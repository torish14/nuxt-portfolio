<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  data () {
    return {
      data: {
        datasets: [
          {
            backgroundColor: 'rgba(0, 229, 255, 1)', // 塗り潰しの色
            borderColor: 'rgba(0, 229, 255, 1)', // 線の色
            pointBackgroundColor: 'rgba(0, 229, 255, 1)', // 点の塗り潰しの色
            data: [
              {
                x: 100,
                y: 0,
                r: 15
              },
              {
                x: 100,
                y: 50,
                r: 15
              },
              {
                x: 100,
                y: 100,
                r: 15
              },
              {
                x: 100,
                y: 150,
                r: 15
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
              max: 200,
              fontColor: 'black'
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
              max: 200,
              fontColor: 'black'
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
