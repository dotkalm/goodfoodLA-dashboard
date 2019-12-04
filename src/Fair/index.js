import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Fair extends Component {

  state = {

    hourlyWage1: {
      labels: ['Data from Occupational Employment Statistics Survey in 2013', 'Data from Occupational Employment Statistics Survey in 2016'],
      datasets: [{
        label: "Average hourly wage of nonsupervisory food system worker",
        data: [10.62, 12.59, 0],
        backgroundColor: 'rgba(70, 177, 201, 0.8)'
        }]
    }, 
    
    hourlyWage2: {
      labels: ['LA County Minimum Wage Report in 2013', 'LA County Minimum Wage Report in 2016'],
      datasets: [{
        label: "Gap between the living wage for a household with two adults & one child in LA County and minimum wage ",
        data: [12.07, 16.16, 0],
        backgroundColor: 'rgba(115, 108, 237, 0.8)'
      }]
    }
  }

  render() {

    return(
      <div>

        <div className="rectangle">
        What are we trying to achieve?<br/>
          <div className="healthyFour">
            <div className="healthyNumber">
            <span id="healthyNumber">1</span>
            <p>Humane Treatment of Animals</p>
            </div>
            <div className="healthyNumber">
            <span id="healthyNumber">2</span>
            <p>Increase Health and Safety of Workers</p>
            </div>
            <div className="healthyNumber">
            <span id="healthyNumber">3</span>
            <p>Family-Supporting Wages for Workers</p>
            </div>
            <div className="healthyNumber">
            <span id="healthyNumber">4</span>
            <p>Increase Food System Jobs In Region</p>
            </div>
         </div>
        </div>

        <div className="healthyGraphContent">
            <div id="graph">
              <Bar
                data={this.state.hourlyWage1}
                width={800}
                height={500}
                options={{maintainAspectRatio: false , responsive:false}}
                />
            <p></p>
              <Bar
                data={this.state.hourlyWage2}
                width={800}
                height={500}
                options={{maintainAspectRatio: false , responsive:false}}
                />
            </div>
          </div>

      </div>
    )
  }
}

export default Fair;