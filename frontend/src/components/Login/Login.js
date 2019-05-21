import React, { Component } from 'react';
import stocksymbol from './stocksymbol.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../Signup/Signup.css';
import { CountryDropdown} from 'react-country-region-selector';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
        //this.handleLogout = this.handleLogout.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return (
            <div>
                <div className="symbol">
                    <img src = {stocksymbol} height="75" width="150" alt=""></img>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="container logcontainer">
                <br></br>
                    <b className="BillDetails">
                        Account Details <br></br>
                    </b>
                    <br></br>
                    <p className="paymentMethod">
                        Enter Details:
                    </p>
                    <form onSubmit>
                        Enter Email:
                        <div class="form-group">
                            <input onChange = {this.onChange} type="email" class="form-control" name="email" placeholder="Email" required/>
                        </div>
                        Enter Password:
                        <div class="form-group">
                            <input onChange = {this.onChange} type="password" class="form-control" name="password" placeholder="Password" required/>
                        </div>
                        <br></br>
                        <div>
                            <Link to="/input" class="btn btn-warning btn-lg btn-block">Login</Link>  
                        </div>
                    </form> 

                </div>
            </div>
        );
    }
}

export default Login; 
