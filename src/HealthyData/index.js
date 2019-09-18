import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../constants/routes'
import Test from '../Test'

const SignUp = (props) => {
  return (
    <div>
      <h1>Healthy</h1>
        <SignUpForm setUserId={props.setUserId}/>
    </div>
  )
}

class SignUpFormBase extends Component {
  state = {
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
                console.log(this.state.stats, 'line 28')
        })
    }
  render() {
   console.log(this.state) 
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
      <div>
        {healthyStats }
        <Test state={this.state.stats} />
      </div>
         )
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase))



export default SignUp

