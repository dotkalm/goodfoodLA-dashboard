import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { withFirebase } from '../Firebase'

const Login = (props) => (
  <div>
   <SignInForm handleSelect={props.handleSelect}/>
  </div>
)

class SignInFormBase extends Component {
  state = {
    email: '',
    password: '',
    error: null,
    stats: []
  }
    componentDidMount(){
        this.props.firebase.topLevel().on('value', snapshot => 
            {this.setState({ loading: false })
            const affordable = snapshot.child("affordable").val()
                const newArray = []
                for (const item in affordable){
                    newArray.push(affordable[item])
                }
                this.setState({stats: newArray})
                this.props.handleSelect(newArray)
                console.log(this.state.stats, 'line 28')
        })
    }

}

const SignInForm = withRouter(withFirebase(SignInFormBase))

const SignUpLink = () => (
  <p>
    Don't have an account? <NavLink exact to='/'>Sign Up</NavLink>
  </p>
)

export default Login 

