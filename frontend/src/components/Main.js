import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Input from './Input/Input';
import Output from './Output/Output';
import Stats from './Output/Stats';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Home from './Home/Home'

class Main extends Component {
    render(){
        return(
            <div>
            <Route path="/input" component={Input}/>
			<Route exact path="/output" component={Output}></Route>
            <Route exact path="/stats" component={Stats}></Route>
            <Route path="/home" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            </div>
        )
    }
}
export default Main;
