import React, { Component }           from 'react';

class Enigma extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className="enigmaContent">
                <strong>
                    {this.props.nameEnigma}
                </strong>
                <br />
                <br />
                {this.props.imgEnigma}
                <br />
                <br />

                {this.props.contentEnigma}
            </div>
        )
    }
}
export default Enigma;
