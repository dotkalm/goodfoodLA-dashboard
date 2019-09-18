import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import { thisExpression } from '@babel/types';

class Test extends Component {

  state = {
    obeseChildren: {
      labels: ['2011', '2015', ''],
      options: {
        scales: {
          xAxes: [{ maxBarWidth: 1, maxBarWidth: 1 }],
          yAxes: [{ maxBarWidth: 1, maxBarWidth: 1 }],
        }
      },
      datasets: [{
        label: "LA County's % of obese children in grades 5, 7 & 9",
        data: [
          22.4, 21.2, 10, 25
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        //   'rgba(54, 162, 235, 0.8)'
        ]
      }]
    },

    diabetesAdult: {
      labels: ['African-American', 'Asian', 'Latino', 'White', 'Native Hawaiian/Pacific Islanders', 'American Indian/Native Alaskan'],
      datasets: [{
        label: "2011 Adult Diabetes Rates (in %)",
        data: [12.6, 9.3, 9.5, 8.5, 0, 0, 35],
        backgroundColor: 'rgba(115, 108, 237, 0.8)'
        },
        {
        label: "2015 Adult Diabetes Rates (in %)",
        data: [13.7, 8.2, 10.7, 8.2, 29.9, 15.2, 35],
        backgroundColor: 'rgba(80, 118, 90, 0.8)',
        },       
        {
        label: "Rate of change from 2011 to 2015",
        data: [1.1, -1.1, 1.2, -0.3],
        backgroundColor: [
          'red',
          'green',
          'red',
          'green',
        ]}         
      ]
    },

    stores: {
        labels: ['# of grocery stores', '# of convenience stores', '# of liquor stores'],
        datasets: [{
          label: "2011 number in LA County from US Census: County Business Patterns",
          data: [2011, 621, 1135, 0],
          backgroundColor: 'rgba(115, 108, 237, 0.8)'
          },
          {
          label: "2015 number in LA County from US Census: County Business Patterns",
          data: [2056, 648, 1172, 0],
          backgroundColor: 'rgba(80, 118, 90, 0.8)',
          }         
        ]
      },

      gardens: {
        labels: ['# of community gardens'],
        datasets: [{
          label: "2013 number of gardens from Cultivate LA",
          data: [118, 0],
          backgroundColor: 'rgba(115, 108, 237, 0.8)'
          },
          {
          label: "2016 number of gardens from Cultivate LA",
          data: [158, 0],
          backgroundColor: 'rgba(80, 118, 90, 0.8)',
          }         
        ],
      }

  }

    render(){
      return(
        <div>
          <Bar
            data={this.state.obeseChildren}
            width={400}
            height={300}
            options={{ responsive:false}}
          />
          <Bar
            data={this.state.diabetesAdult}
            width={800}
            height={500}
            options={{maintainAspectRatio: false , responsive:false}}
          />
          <Bar
            data={this.state.stores}
            width={800}
            height={500}
            options={{maintainAspectRatio: false , responsive:false}}
          />
          <Bar
            data={this.state.gardens}
            width={800}
            height={500}
            options={{maintainAspectRatio: false , responsive:false}}
          />
        </div>
      )
    }
}

export default Test
