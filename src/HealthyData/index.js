import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import HealthyDataSort from './sort'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../constants/routes'
import Test from '../Test'
import Affordable from '../Affordable'

const HealthyData = (props) => {
  return (
    <span>
            <HealthyDataForm setUserId={props.setUserId} grabGroup={props.grabGroup}/>
    </span>
  )
}
class HealthyDataFormBase extends Component {
  state = {
       group: '',
       data: [],
       stats: []
  }
   
    componentDidMount(){
        this.props.firebase.topLevel().on('value', snapshot => 
            {this.setState({ loading: false })
            const affordable = snapshot.child("Healthy").val()
                const newArray = []
                for (const item in affordable){
                    newArray.push(affordable[item])
                }
                this.setState({stats: newArray})
        })
    }
  render() {
    const healthyStats =  this.state.stats.map((e,i) => {
        return (
            <div key={`${i}`}>
                <div key={`group ${i}`}> group: {e.group} </div>
                <div key={`indicator ${i}`}> indicator: {e.indicator} </div>
                <div key={`baseline ${i}`}> baseline: {e.baseline} </div>
                <div key={`update ${i}`}> update: {e.update} </div>
                <div key={`source ${i}`}> source: {e.source} </div>
            </div>
        ) 
      
      })
    return (
           <div className='bigGraph' > 
             {/* {healthyStats } */}
           <HealthyDataSort healthData={this.state.stats}  selectedGroup={this.props.selectedGroup} grabGroup={this.props.grabGroup}/>
           

    </div>
         )
  }
}

const HealthyDataForm = withRouter(withFirebase(HealthyDataFormBase))



export default HealthyData

