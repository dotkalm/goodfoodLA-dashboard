import React, { Component } from 'react';
import Graph from './Graph'
import * as ROUTES from './constants/routes'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Add from './Add'
import { withFirebase } from './Firebase'


class App extends Component {
    state = {
        stats: [] 
    }
    handleSelect = (data) => {
        this.setState({stats: data})
    } 
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' render={(props)=>{
                        return <Graph stats={this.state.stats} handleSelect={this.handleSelect}/>
                    }}/>
                    <Route exact path={ROUTES.ADD} render={(props)=> <Add/>}/>
            </Switch>
        </main>
        )
    }
}

export default App;
