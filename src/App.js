import React, { Component } from 'react';
import Graph from './Graph'
import * as ROUTES from './constants/routes'
// import { routes } from './constants/'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Add from './Add'
import Nav from './Nav'
import { withFirebase } from './Firebase'

class App extends Component {
    state = {
        stats: [] 
    }
    handleSelect = (data) => {
        this.setState({stats: data})
        console.log(data, 'data app.js')
    } 
    render(){
        return(
          <div>
            <Nav routes={ROUTES.NAV}/>
              <Switch>
                <Route exact path='/' render={(props)=>{
                  return <Graph data={this.state.stats} handleSelect={this.handleSelect}/>
                }}/>
                <Route exact path={ROUTES.ADD} render={(props)=>{
                  return<Add username={this.state.username}/>}}/>
              </Switch>
          </div>
        )
    }
}

export default App;
