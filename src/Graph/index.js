import React, { Component } from 'react';
import Login from '../Login'

class Graph  extends Component {
    state = {
        toggle: false, 
    }
    render(){
        return(
            <div>
                sanity check
                <Login/>
            </div>
        )
    }
}

export default Graph;
