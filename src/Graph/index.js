import React, { Component } from 'react';
import Login from '../Login'

class Graph  extends Component {
    state = {
        toggle: false, 
        stats: [],
        keys : []
    }

    componentDidMount(){
        this.setState({stats : this.props.data})
        console.log(this.props.data)
    }

    render(){
        const keyArray = []

        const keys = this.props.data.map((e,i,array) => {
            return (
                <div key={`${i}`}>
                    <div key={`group ${i}`}> group: {e.group} </div>
                    <div key={`indicator ${i}`}> indicator: {e.indicator} </div>
                    <div key={`baseline ${i}`}> baseline: {e.baseline} </div>
                    <div key={`update ${i}`}> update: {e.update} </div>
                    <div key={`source ${i}`}> source: {e.source} </div>
                </div>
            )            
        })
        // console.log(this.props.data, 'key array')
        // const renderKeys = keyArray.map(e => {
        //     return(
        //     <span key={e}> 
        //         { e } 
        //     </span>
        //     )
        // })
        // const stats = this.props.data.map((e,i,array) => {
        //     return(
        //     <p key={i}>
        //           {e.indicator}
        //             <br/>
        //           {e.group}
        //     </p>
        //     )
        // })
                return(
            <div>
                    {/* {stats} */}
                    {keys} 
                <Login handleSelect={this.props.handleSelect}/>
            </div>
        )
    }
}

export default Graph;
