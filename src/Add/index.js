import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import database from '../Firebase/firebase'
import TopLevel from '../TopLevel/index'

const Add = (props) => { 
    return (
        <div>
            <AddForm add={props.add} />
            <TopLevel/>
      </div>
    )
}

class AddFormBase extends Component {
    state = {
    
    
    }
    
    render() {
       const { indicator } = this.state 
        return (
            <form>
                <input
                    name='indicator'
                    type='text'
                    value={indicator}
                    placeholder='indicator'
                />
                <button>Add</button>
            </form>
        )
    }
}

const AddForm = withRouter(withFirebase(AddFormBase))

export default Add
