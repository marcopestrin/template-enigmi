import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import Aux                            from "../../hoc/Aux";
import Button                         from '../UI/Button/Button';
import classes                        from './Password.css';
import * as actions                   from '../../store/actions';

class Password extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            password: ''
        }
    }

    submitPassword=(e)=>{   
        e.preventDefault();
        this.props.submitPassword(this.state.password, this.props.levelNumber);
        //this.forceUpdate() //not working!!
        setTimeout(this.forceUpdate, 2000 )
    }
      

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps,"pppp ma sei serio?");
    }

    render() {        
        return(
            <Aux>
                <form >
                    <div className="PasswordInput">
                        <input 
                            value={this.state.password}
                            type="text"
                            onChange={this.handleChange}
                            name="password"
                            id="passwordInput"
                            aria-describedby="password"
                            placeholder="Insert here the password for the next level" />
                        <Button 
                            clicked={this.submitPassword}
                            btnType="btn btn-primary">
                            Try!
                        </Button>
                    </div>
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
        submitPassword: (password,levelNumber) =>  dispatch(actions.submitPassword(password,levelNumber))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);

