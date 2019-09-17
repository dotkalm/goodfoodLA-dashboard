import React, { Component } from 'react';
import Graph from './Graph'
import * as ROUTES from './constants/routes'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Add from './Add'
import Nav from './Nav'
import Affordable from './Affordable'
import { withFirebase } from './Firebase'
import Healthy from './Healthy'

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

                <Route exact path={ROUTES.ADD} 
                    render={()=>{
                      return <Graph 
                        data={this.state.stats} 
                        handleSelect={this.handleSelect}/>
                }}/> 

                <Route exact path={ROUTES.HEALTHY} 
                  render={(props)=>{
                    return <Healthy data={this.state}/>
                }}/>
                
                
                <Route exact path='/' 
                    render={()=>{
                      return <Graph 
                        data={this.state.stats}
                        handleSelect={this.handleSelect}/>
                }}/>
              </Switch>
          </div>
        )
    }
}

export default App;
