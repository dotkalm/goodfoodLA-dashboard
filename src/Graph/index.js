import React, { Component } from 'react';
import Login from '../Login'

class Graph  extends Component {
    state = {
        toggle: false, 
    }
    render(){
        console.log(this.props.stats)
        return(
            <div>
                sanity check
                <Login handleSelect={this.props.handleSelect}/>
            </div>
        )
    }
}

export default Graph;
