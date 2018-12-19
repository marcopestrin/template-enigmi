import React, { Component }           from 'react';
import Aux                            from "../../hoc/Aux";
import Button                         from '../UI/Button/Button';


class Password extends Component {

    submitPassword(e) {
        e.preventDefault();
        console.log("invio passwordddd!!");
    }

    render() {        
        return(
            <Aux>
                <input placeholder="Insert here the password for the next level" value="" name="" />
                <Button 
                    clicked={this.submitPassword}
                    btnType="classic">
                    TRY!
                </Button>
            </Aux>
        );
    }

}
export default Password;
