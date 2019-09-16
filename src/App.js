import React, { Component } from 'react';
import Graph from './Graph'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'

class App extends Component {
    state = {
        toggle: false, 
    }
    render(){
        return(
        <Switch>
            <Route exact path='/' render={(props)=>{
                return <Graph data={this.state}/>
            }}/>
        </Switch>
        )
    }
}

export default App;
