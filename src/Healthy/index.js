import React, { Component } from 'react'
import HealthyData from '../HealthyData'
class Healthy extends Component {
    state = {
        dataset: [],
    }
    componentDidMount(){
        console.log('healthy')
    }

    render(){
    
        return (
        <div>
            <HealthyData/>
        </div>
        )
    }
}

export default Healthy
