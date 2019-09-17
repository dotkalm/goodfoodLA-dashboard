import React, { Component } from 'react';
import Login from '../Login'

class Graph  extends Component {
    state = {
        toggle: false, 
    }


    render(){
        const stats = this.props.stats.map((e,i,array) => {
            
            return(
            <p key={i}>
                {e.indicator}
            </p>
            )
        })
        console.log(this.props.stats)
                return(
            <div>
                    {stats}
                <Login handleSelect={this.props.handleSelect}/>
            </div>
        )
    }
}

export default Graph;
