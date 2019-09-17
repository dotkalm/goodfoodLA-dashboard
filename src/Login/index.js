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
                console.log(this.props)
        })
    }
  onSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => 
        
        this.props.history.push('/')
      )
      .catch(error => {
        this.setState({error})
      })
    //this.props.signIn(this.props.firebase.auth.W) 
  }

  onChange = event => 
    this.setState({ [event.target.name] : event.target.value})

  render() {
    const { email, password, error } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name='email'
          type='text'
          value={email}
          onChange={this.onChange}
          placeholder='Email Address'
        />

        <input 
          name='password'
          type='password'
          value={password}
          onChange={this.onChange}
          placeholder='Password'
        />
        <button type='submit'>sign in</button>
        {error && error.message}
      </form>
    )
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase))

const SignUpLink = () => (
  <p>
    Don't have an account? <NavLink exact to='/'>Sign Up</NavLink>
  </p>
)

export default Login 

