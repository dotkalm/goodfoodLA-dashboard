import React, { Component } from 'react';
import Graph from './Graph'
import * as ROUTES from './constants/routes'
import { Link, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Add from './Add'
import Nav from './Nav'
import Footer from './Footer'
import Affordable from './Affordable'
import { withFirebase } from './Firebase'
import Healthy from './Healthy'
import Fair from './Fair'
import Sustainable from './Sustainable'
import Test from './Test'
import Home from './Home'


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
              <Home/>
              <Switch>
                {/* <Route exact path={ROUTES.HOME1}>
                  <Home/>
                </Route> */}
                <Route exact path={ROUTES.HOME}
                      render={(props)=>{
                        return <Home data={this.state}/>
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
                <Route exact path={ROUTES.FAIR}
                  render={(props)=>{
                    return <Fair data={this.state}/>
                }}/>
                <Route exact path={ROUTES.AFFORDABLE}
                  render={(props)=>{
                    return <Affordable data={this.state}/>
                }}/>
                <Route exact path={ROUTES.SUSTAINABLE}
                  render={(props)=>{
                    return <Sustainable data={this.state}/>
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
