import React, { Component } from 'react';
import "./Input.css"
import swal from 'sweetalert2'
import axios from 'axios';
const Swal = require('sweetalert2')


class Input extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        amount: 0,
        arr: [],
      }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCheckedBox = this.onChangeCheckedBox.bind(this);
  }
  async onSubmit(e) {
    e.preventDefault();
    console.log(this.state.amount)
    var type = this.state.arr;
    var amt = this.state.amount;
    console.log(type.length)
    if (amt < 5000) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter Amount greater than $5000',
        type: 'error',
        confirmButtonText: 'OK'
      })
      return
    }

    if (type.length === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Please select atleast one investment option',
        type: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    else if (type.length > 2) {
      Swal.fire({
        title: 'Error!',
        text: 'Maximum two options allowed',
        type: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    var inputData = {
      price: this.state.amount,
      strategy: type
    }
    console.log(inputData)

    const response = await axios.post('http://localhost:5000/getdata', inputData)
    if (response.status == 200) {
      //console.log(" response.data" + response)
      //console.log(" response.data" + JSON.stringify(response.data))
      this.setState({
        // chartDataclicks: response.data.weekly
      })
    }
    console.log("inputData.lebgth ", inputData.strategy.length)

    if (inputData.strategy.length === 2) {
      var detail1 = response.data[0]
      var detail2 = response.data[1]
      detail1.concat(detail2)
      console.log("detail " + JSON.stringify(detail1.concat(detail2)))
      this.props.history.push({
        pathname: '/stats',
        state: { detail: detail1.concat(detail2) }
      })
    }
    else {
      this.props.history.push({
        pathname: '/stats',
        state: { detail: response.data[0] }
      })
    }
  }
  onChangeInput(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }
  onChangeCheckedBox(e) {
    e.preventDefault();
    var newArray = this.state.arr.slice();
    newArray.push(e.target.value);
    this.setState({ arr: newArray })
  }
  render() {
    return (
      <div>
        <div>
          <head>
            {/* <!-- Latest compiled and minified CSS --> */}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />

            {/* <!-- jQuery library --> */}
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

            <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />
            <script
              src="https://unpkg.com/react-dom/umd/react-dom.production.js"
              crossorigin
            />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
            <script
              src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
              crossorigin
            />
            {/* <!-- Latest compiled JavaScript --> */}
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

            <script src="sweetalert2.min.js"></script>
            <link rel="stylesheet" href="sweetalert2.min.css" />
          </head>
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Stock Portfolio Manager</a>
            </div>
          </div>
        </nav>
        <div>
          <div className="input-container">
            <form onSubmit={this.onSubmit}>
              <center>
                <h2 className="input-heading">
                  ENTER INVESTMENT DETAILS
</h2>
                <input type="number" className="form-control-input" id="usr" name="amount" onChange={this.onChangeInput} required />

              </center>
              <br></br>
              <p className="pInput">SELECT INVESTMENT OPTIONS</p>
              <div className="glyphInput">
                <label className="checkbox-inline1">
                  <span className="glyphicon glyphicon-list-alt" title="Home"></span>ETHICAL INVESTING

                </label>
                <label className="checkbox-inline1">
                  <span className="glyphicon glyphicon-edit" ></span>GROWTH INVESTING
</label>
                <label className="checkbox-inline1">
                  <span className="glyphicon glyphicon-folder-open" ></span>INDEX INVESTING
</label>
                <label className="checkbox-inline1">
                  <span className="glyphicon glyphicon-signal" ></span>QUALITY INVESTING
</label>
                <label className="checkbox-inline1">
                  <span className="glyphicon glyphicon-file" ></span>VALUE INVESTING
</label>
              </div>


              <div className="checkboxesInput">
                <label className="checkbox-inline">
                  <input type="checkbox" value="Ethical Investing" className="inputCheckBox" onChange={this.onChangeCheckedBox} />
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" value="Growth Investing" className="inputCheckBox" onChange={this.onChangeCheckedBox} />
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" value="Index Investing" className="inputCheckBox" onChange={this.onChangeCheckedBox} />
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" value="Quality Investing" className="inputCheckBox" onChange={this.onChangeCheckedBox} />
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" value="Value Investing" className="inputCheckBox" onChange={this.onChangeCheckedBox} />
                </label>
              </div>
              <div className="inputSubmit">
                <input type="submit" name="submitInput" value="Submit" className="submit-button-input" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Input;

