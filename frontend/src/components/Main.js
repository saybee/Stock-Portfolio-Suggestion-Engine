import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Input from './Input/Input'

class Main extends Component {
    render(){
        return(
            <div>
            <Route path="/input" component={Input}/>
            </div>
        )
    }
}
export default Main;
