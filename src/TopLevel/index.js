import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import database from '../Firebase/firebase'
import { withFirebase } from '../Firebase';

class TopLevel extends Component {
    componentDidMount(){
        console.log(this.props)

       // this.props.firebase.database.ref('la-food-dashboard').on('value', (snapshot) => {
         //   console.log(snapshot)
       // })
    }
    render() {
        return (
            <div>
                HI
            </div>
        )
    }
}

export default TopLevel;
