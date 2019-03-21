import React, {Component} from 'react';

import Cryptr from '../js/encryption';
import DisplayDecryptedToken from './DisplayDecryptedToken';

class TokenForm extends Component{
    
    constructor(){
        super();

        this.state = {
            token: null
        }

        this.setToken = this.setToken.bind(this);
    }
    
    setToken(token){
        if(token){
            this.setState({token})
        } else {
            this.setState({token: null})
        }
    }

    handleSubmit(setToken){
        return (e) => {
            e.preventDefault()
            const token = document.getElementById("encrypted-token").value;
            setToken(token)
            
        }
    }

    render(){
        return(
            <div>

                <form id="decrypt-token-form" onSubmit={this.handleSubmit(this.setToken)}>
                    <textarea id="encrypted-token"></textarea><br/>

                    <input type="submit" value="Authenticate Token" resize="false"/>

                </form>
                {
                    this.state.token &&
                    <div>
                        <DisplayDecryptedToken token={this.state.token} />
                    </div>
                }
            </div>
        )
    }
}

export default TokenForm