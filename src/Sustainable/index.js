import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Sustainable extends Component {

  state = {
    produceRecovered: {
      labels: ['2013 Food Forward', '2015 Food Forward'],
      datasets: [{
          label: "Pounds of produce recovered in the LA Foodshed by Food Forward",
          data: [2083546.25, 8811283, 10000000, 0],
          backgroundColor: 'rgba(54, 162, 235, 0.8)'
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
            <p>Sustainable Family Farming</p>
            </div>
            <div className="healthyNumber">
            <span id="healthyNumber">2</span>
            <p>Decrease Food Waste</p>
            </div>
            <div className="healthyNumber">
            <span id="healthyNumber">3</span>
            <p>Decrease Water Usage in Food Production</p>
            </div>
            <div className="healthyNumber">
            <span id="healthyNumber">4</span>
            <p>Increase Number of Farms and Gardens</p>
            </div>
          </div>
        </div>

        <div className="healthyGraphContent">
            <div id="graph">
              <Bar
                data={this.state.produceRecovered}
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

export default Sustainable;