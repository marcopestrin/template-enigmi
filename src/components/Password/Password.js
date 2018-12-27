import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import Aux                            from "../../hoc/Aux";
import Button                         from '../UI/Button/Button';
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
        this.forceUpdate() //not working!!
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {        
        return(
            <Aux>
                <form>
                    <label>Insert here the password for the next level</label>
                    <input value={this.state.password} type="text" onChange={this.handleChange} name="password" class="form-control" id="password" aria-describedby="password" placeholder="password" />

                    <Button 
                        clicked={this.submitPassword}
                        btnType="classic">
                        Submit password
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
        submitPassword: (password,levelNumber) =>  dispatch(actions.submitPassword(password,levelNumber))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);

