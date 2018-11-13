import React, { Component }     from 'react';
import fire                     from '../../config/Fire';
import Button                   from '../UI/Button/Button';
import Aux                      from "../../hoc/Aux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.isSignUp = true
    this.state = {
        isSignUp : false,
        email: '',
        password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
      if(this.state.isSignUp) {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((result)=>{
                console.log(result)
                this.state.auth = result;
                this.props.history.push({
                    pathname:"/", 
                    state: {
                        login:false
                    }
                });            
            })
            .catch((error) => {
                console.log(error);
            })
      }else{
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((result)=>{
                console.log(result);
                this.state.auth = result;
                this.props.history.push({
                    pathname:"/", 
                    state: {
                        login: true
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
      }

  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((u)=>{
        console.log(u)
        this.props.onAuth(this.state.email, this.state.password,this.state.isSignUp);
    })
    .catch((error) => {
        console.log(error);
      })
  }

  switchAuthModeHandler = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return {isSignUp:!prevState.isSignUp}
    });
  }

  render() {
    return (
        <Aux>
            <h1>{this.state.isSignUp ? 'Registrati' : 'Accedi'}</h1>
            <form>
                <label for="email1">Email address</label>
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
                
                <label for="password1">Password</label>
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password1" placeholder="Password" />

                <Button 
                    clicked={this.login}
                    btnType="classic">
                    SEND MODULE
                </Button>
                <Button 
                    clicked={this.switchAuthModeHandler}
                    btnType="classic">
                    SWITCH TO {!this.state.isSignUp ? 'Registrati' : 'Accedi'}
                </Button>
            </form>
        </Aux>
    );
  }
}

export default Login;
