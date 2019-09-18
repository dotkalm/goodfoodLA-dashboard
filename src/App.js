import React, { Component } from 'react';
import Graph from './Graph'
import * as ROUTES from './constants/routes'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Add from './Add'
import Nav from './Nav'
import Footer from './Footer'
import Affordable from './Affordable'
import { withFirebase } from './Firebase'
import Healthy from './Healthy'
import Test from './Test'

import HealthyGroupSvg from './Home'

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
                <Route exact path={ROUTES.HOME}
                      render={(props)=>{
                        return <HealthyGroupSvg/>
                  }}/>
                <Route exact path={ROUTES.ADD} 
                    render={()=>{
                      return <Graph 
                        data={this.state.stats} 
                        handleSelect={this.handleSelect}/>
                }}/> 

                <Route exact path={ROUTES.HEALTHY} 
                  render={()=>{
                    return <Healthy data={this.state}/>
                }}/>

                <Route exact path="/Affordable"
                  render={(props)=>{
                    return <Affordable data={this.state}/>
                }}/>

                <Route exact path="/Test"
                  render={(props)=>{
                    return <Test data={this.state}/>
                }}/>
                
              </Switch>
            <Footer/>
          </div>
        )
    }
}

export default App;
