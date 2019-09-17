import React, { Component } from 'react';
import Login from '../Login'

class Graph  extends Component {
    state = {
        toggle: false, 
        stats: [],
        keys : []
    }

    componentDidMount(){
        this.setState({stats : this.props.stats})
    }

    render(){
        const keyArray = []
        const keys = this.props.stats.forEach((e,i,array) => {
            Object.keys(e).forEach(ee => {
                return keyArray.push(ee)    
            })
            
        })
        console.log(keyArray, 'key array')
        const renderKeys = keyArray.map(e => {
            return(
            <span key={e}> 
                {e }  ^^ 
            </span>
            )
        })
        const stats = this.props.stats.map((e,i,array) => {
            return(
            <p key={i}>
                  {e.indicator}
                    <br/>
                  {e.group}
            </p>
            )
        })
                return(
            <div>
                    {stats}
                    {renderKeys}
                <Login handleSelect={this.props.handleSelect}/>
            </div>
        )
    }
}

export default Graph;
