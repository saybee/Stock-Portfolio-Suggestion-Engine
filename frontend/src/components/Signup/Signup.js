import React, { Component } from 'react';
import stocksymbol from './stocksymbol.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import { CountryDropdown} from 'react-country-region-selector';

class Signup extends Component {

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
                <div className="container sigcontainer">
                <br></br>
                    <b className="BillDetails">
                        Account Details <br></br>
                    </b>
                    <br></br>
                    <p className="paymentMethod">
                        Enter Details:
                    </p>
                    <form onSubmit>
                        Enter First Name:
                        <div class="form-group">
                            <input onChange = {this.onChange} type="text" class="form-control" name="FirstName" placeholder="First Name" required/>
                        </div>
                        Enter Last Name:
                        <div class="form-group">
                            <input onChange = {this.onChange} type="text`" class="form-control" name="LastName" placeholder="Last Name" required/>
                        </div>
                        Enter Email:
                        <div class="form-group">
                            <input onChange = {this.onChange} type="email" class="form-control" name="email" placeholder="Email" required/>
                        </div>
                        Enter Password:
                        <div class="form-group">
                            <input onChange = {this.onChange} type="password" class="form-control" name="password" placeholder="Password" required/>
                        </div>
                        Select Country:
                        <div class="form-group">
                        <CountryDropdown
                            value={this.state.country}
                            onChange={this.onChange}
                            name="country" 
                            class="form-control"
                        />
                        </div>
                        <div>
                            <Link to="/login" class="btn btn-warning btn-lg btn-block">Sign Me Up</Link>  
                        </div>
                    </form> 

                </div>
            </div>
        );
    }
}

export default Signup; 
