import React, { Component }             from 'react';
import {connect}                        from 'react-redux';
import Button                           from '../UI/Button/Button';
import Aux                              from "../../hoc/Aux";
import * as actions                     from '../../store/actions';


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.isSignUp = true
        this.state = {
            isSignUp : false,
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandlerRegister=(e)=>{
        e.preventDefault()
        this.props.createNewProfile(this.state.email,this.state.password)
    }

    submitHandlerAuthentication=(e)=>{
        e.preventDefault()
        this.props.login(this.state.email,this.state.password)
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
            <h1>{this.state.isSignUp ? 'Registration' : 'Login'}</h1>
            <form>
                <label for="email1">Email address</label>
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
                
                <label for="password1">Password</label>
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password1" placeholder="Password" />

                <Button 
                    clicked={this.state.isSignUp ? this.submitHandlerRegister : this.submitHandlerAuthentication}
                    btnType="classic">
                    SEND MODULE
                </Button>
                <Button 
                    clicked={this.switchAuthModeHandler}
                    btnType="classic">
                    SWITCH TO {!this.state.isSignUp ? 'Registration' : 'Login'}
                </Button>
            </form>
        </Aux>
    );
  }
}

const mapStateToProps = state => {
    return {

    };
}
const mapDispatchToProps = dispatch => {
    return {
        createNewProfile: (email,password) => dispatch(actions.createNewProfile(email,password)),
        login: (email,password) =>  dispatch(actions.authentication(email,password)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
