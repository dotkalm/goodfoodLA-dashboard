import React, { Component } from 'react';
import Graph from './Graph'
import * as ROUTES from './constants/routes'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Add from './Add'

class App extends Component {
    state = {
        toggle: false, 
    }
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' render={(props)=>{
                        return <Graph data={this.state}/>
                    }}/>
                    <Route exact path={ROUTES.ADD} render={()=>{
                        return<Add username={this.state.username}/>}}/>
            </Switch>
        </main>
        )
    }
}

export default App;
