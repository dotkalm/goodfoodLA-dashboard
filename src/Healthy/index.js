import React, { Component } from 'react'
import HealthyData from '../HealthyData'


class Healthy extends Component {
    state = {
        dataset: [],
        group: '',
        test: 0,
    }
    
    componentDidMount(){
        console.log('healthy')
    }
    
    grabGroup(incomingGroupName){
        this.setState((prevState, props) => {
            console.log(props)
            console.log(prevState)
            return {group: incomingGroupName};
          })
        this.bigTest()
      }
    bigTest(){
        console.log(this.state.group, ' inside grab group group')

    }
    render(){
    
        return (
        <div>
            <HealthyData grabGroup={this.grabGroup.bind(this)} selectedGroup={this.state.group}/>
        </div>
        )
    }
}

export default Healthy
