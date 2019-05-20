import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Input from './Input/Input';
import Output from './Output/Output';
import Stats from './Output/Stats';


class Main extends Component {
    render(){
        return(
            <div>
            <Route path="/input" component={Input}/>
			<Route exact path="/output" component={Output}></Route>
            <Route exact path="/stats" component={Stats}></Route>
            </div>
        )
    }
}
export default Main;
