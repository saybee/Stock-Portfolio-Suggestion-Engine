import React, { Component } from 'react';
import stockwall1 from './stockwall1.jpg'
import stockwall2 from './stockwall2.jpg'
import stockwall3 from './stockwall3.jpg'
import stockwall4 from './stockwall4.jpeg'
import stockwall5 from './stockwall5.jpg'
import stocksymbol from './stocksymbol.png';
import {Link} from 'react-router-dom';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div>
            <div className="navbar">
                <div className="symbol">
                    <img src = {stocksymbol} height="50" width="100" alt=""></img>
                </div>
                <div className="signuplogin">
                    <Link to="/signup" className="linksignup">SIGN-UP</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/login" className="linksignup">LOGIN</Link>
                </div>
            </div>
                <Carousel class="carouselprop" showThumbs={false} autoPlay={true} useKeyboardArrows={true} infiniteLoop={true} interval={2000}>
                <div className="fix">
                    <img className="homeimg" src={stockwall1}></img>
                    <h1 className="home1h1" style={{"color":"yellow", marginTop: "-600px"}}>
                    Stock Portfolio Suggestion Engine
                    </h1>
                </div>
                <div className="fix">
                    <img className="homeimg" src={stockwall2} />
                    <h1 className="home1h1" style={{"color":"yellow",marginTop: "-600px" }}>
                    Stock Portfolio Suggestion Engine
                </h1>

                </div>
                <div className="fix">  
                    <img className="homeimg" src={stockwall5} />
                    <h1 className="home1h1" style={{"color":"yellow",marginTop: "-600px" }}>
                    Stock Portfolio Suggestion Engine
                </h1>

                </div>
                <div className="fix">
                    <img className="homeimg" src={stockwall3} />
                    <h1 className="home1h1" style={{"color":"yellow",marginTop: "-600px" }}>
                    Stock Portfolio Suggestion Engine
                </h1>
                </div>
                <div className="fix">
                    <img className="homeimg" src={stockwall4} />
                    <h1 className="home1h1" style={{"color":"yellow",marginTop: "-600px" }}>
                    Stock Portfolio Suggestion Engine
                </h1>

                </div>

                </Carousel>

            </div>
        );
    }
}

export default Home;