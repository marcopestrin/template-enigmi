import React, { Component }             from 'react';
import {connect}                        from 'react-redux';
import thunk                            from 'redux-thunk';
import Axios                            from 'axios';
import Button                           from '../UI/Button/Button';
import * as actions                     from '../../store/actions/index';

class Register extends Component {
  state = {
    emailAddress: '',
    password: ''
  }
  submitHandler = (event) => {
    const {
      emailAddress,
      password
    } = this.state;

    event.preventDefault();
    this.props.onAuth(this.state.emailAddress,this.state.password,this.state.isSignUp);
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {isSignUp:!prevState.isSignUp}
    });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ emailAddress: event.target.value });
  }

  render() {
    var listClasses = "";
    return (
      <div>
        <h1>{this.state.isSignUp ? 'Login' : 'Creazione Account'}</h1>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.handlePasswordChange} type="password" className={listClasses} value={this.props.value} placeholder="password" name="password" />
          <input onChange={this.handleEmailChange} type="email" className={listClasses} value={this.props.value} placeholder="email" name="email" />
          <input type="submit" value="submit" />
        </form>
        <Button 
            clicked={this.switchAuthModeHandler}
            btnType="classic">
              SWITCH TO {this.state.isSignUp ? 'Registrati' : 'Accedi'}
          </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
      onAuth: (email,password,isSignUp) => dispatch(actions.auth(email,password,isSignUp))
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);