import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { withFirebase } from '../Firebase'

const Healthy = (props) => (
    <div>
        HI
    </div>
) 

class HealthyFormBase extends Component {
    state = {
        dataset: [],
    }
    componentDidMount(){
        this.props.firebase.topLevel().on('value',
            snapshot => {
                const healthy = snapshot.child("Healthy").val()
                    console.log(healthy)
        })
    }
}

const HealthyForm = withRouter(withFirebase(HealthyFormBase))

export default Healthy
