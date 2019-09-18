import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Affordable extends Component {

  state = {
    chartData: {
      labels: ['Adults living at 0-199% FPL', 'All adults'],
      datasets: [
        {
          label: "Fruit & Vegetable Accessibility",
          data: [
            81.9, 79.7
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)'
          ]
        }
      ]
    }
  }

  render() {

    console.log(this.props.data, 'this.props in affordable')
    return(
      <div>
          
          <Bar
            data={this.state.chartData}
            width={800}
            height={500}
            options={{maintainAspectRatio: false , responsive:false}}
          />

      </div>
    )
  }
}

export default Affordable;