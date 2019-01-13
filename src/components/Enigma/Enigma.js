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

                <blockquote className="blockquote text-center enigma-title">
                    {this.props.nameEnigma}
                </blockquote>

                <div className="text-center enigma-image">
                    <img src={this.props.imgEnigma} />
                </div>

                <div className="enigma-content text-center">
                    {this.props.contentEnigma}
                </div>

            </div>
        )
    }
}
export default Enigma;
