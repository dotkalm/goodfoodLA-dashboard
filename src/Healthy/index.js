import React, { Component } from 'react'
import '../App.css'
import HealthyDataSort from '../HealthyData/sort'
import Test from '../Test'

class Healthy extends Component  {
  
    render(){
      return(
        <div>

          <div className="rectangle">
            What are we trying to achieve?<br/>
            <div className="healthyFour">
              <div className="healthyNumber">
                <span id="healthyNumber">1</span>
                <p>Increased Healthy Food Access</p>
              </div>
              <div className="healthyNumber">
                <span id="healthyNumber">2</span>
                <p>Improved Eating Habits</p>
              </div>
              <div className="healthyNumber">
                <span id="healthyNumber">3</span>
                <p>Decreased Rates of Obesity & Overweight</p>
              </div>
              <div className="healthyNumber">
                <span id="healthyNumber">4</span>
                <p>Decreased Rates of Diet-related Disease</p>
              </div>
            </div>
          </div>

          <div className="healthyGraphContent">

            <div id="graph">
              <Test />

            </div>
          </div>

        </div>
      )
    }
}

export default Healthy;