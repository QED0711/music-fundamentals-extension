import React, {Component} from 'react';
import TokenForm from './TokenForm';


class TokenChecker extends Component {

    render(){
        return(
            <div className="token-checker">
                
                <heading className="extension-title">
                    <h2>Musictheoryportal.com Token Checker</h2>
                    <p>This extension will decrypt tokens generated from completed assignments on <a href="http://musictheoryportal.com" target="_blank">musictheoryportal.com</a>. Paste your token in the text area below and submit to authenticate</p>
                </heading>
                <TokenForm />

            </div>
        )
        
    }
}


export default TokenChecker;