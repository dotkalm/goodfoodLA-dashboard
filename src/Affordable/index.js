import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Affordable extends Component {

  state = {
    calFreshPeople: {
      labels: ['2012 LA DPSS', '2015 LA DPSS'],
      datasets: [
        {
          label: "Number of CalFresh participants in LA County",
          data: [1110832, 1180033, 1000000],
          backgroundColor: 'rgba(80, 118, 90, 0.8)',
          backgroundColor: 'rgba(54, 162, 235, 0.8)'
          }    
      ]
    },

    calFreshBenefits: {
      labels: ['2012 California Food Policy Advocates', '2014 California Food Policy Advocates'],
      datasets: [{
        label: "CalFresh benefits lost due to underutilization",
        data: [993000000, 1290000000, 50000000],
        backgroundColor: [
          'rgba(115, 108, 237, 0.8)',
          'rgba(54, 162, 235, 0.8)'
        ]
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
              <p>Increase Household Food Security</p>
            </div>
            <div className="healthyNumber">
              <span id="healthyNumber">2</span>
              <p>Decrease Racial and Ethnic Disparities</p>
            </div>
            <div className="healthyNumber">
              <span id="healthyNumber">3</span>
              <p>Improve Access to Healhy Food</p>
            </div>
            <div className="healthyNumber">
              <span id="healthyNumber">4</span>
              <p>Participation In Food Assistance Programs</p>
            </div>
          </div>
        </div>

        <div className="healthyGraphContent">
            <div id="keyFindings">
              Key Findings
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
            </div>
            <div id="graph">
              <Bar
                data={this.state.calFreshPeople}
                width={800}
                height={500}
                options={{maintainAspectRatio: false , responsive:false}}
              />
            <br/>
              <Bar
                data={this.state.calFreshBenefits}
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

export default Affordable;