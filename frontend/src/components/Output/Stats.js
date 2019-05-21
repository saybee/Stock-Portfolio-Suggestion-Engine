import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Graph from './Graph';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import { Skeleton, Empty, Button } from 'antd';
//import './Output.css'

export class Stats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: "profileview",
            stockdata: null,
            companies: [],
            "error": null
        }
    }

    componentDidMount() {
        this.setState({
            companies: this.props.location.state.detail
        })
        console.log("DATA", this.state.companies)
    
    }

    changeKey = (key) => {
        console.log("key selected: ", key);
        this.setState({ key })
    }

    render() {
        console.log("companies " + JSON.stringify(this.state.companies))
        let companies = this.state.companies
        let tabs = null
        let skeleton = null
        let error = null
        if (companies.length === 0 || !companies) {
            skeleton = <Skeleton active />
        } else {
            skeleton = null
        }

        if (this.state.error) {
            error = <Empty description="Couldn't fetch data, try again by refreshing after a minute!" />
            skeleton = null
        }
        if (companies.length > 0) {
            tabs = <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.changeKey(key)}
            >
                {companies.map((company, index) => {
                    // let weeklyData = Object.keys(company.weeklyData)
                    let weeklyData = company.weeklyData
                    let data = []
                    Object.keys(weeklyData).map((key) => {
                        data.push({
                            "day": key,
                            "high": weeklyData[key]["2. high"],
                            "low": weeklyData[key]["3. low"]
                        })
                    });
                    return <Tab key={index} eventKey={company.symbolName} title={company.companyName}>
                        <Graph data={data} />
                    </Tab>
                })
                }
            </Tabs>
        }
        return (
            <div className="stats">
                <h4>Stocks Suggestion</h4><br />

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Symbol</th>
                            <th>Company</th>
                            <th>Invested Amount</th>
                            <th>Change(%)</th>
                            <th>Stock Value</th>
                            <th>Strategy</th>
                        </tr>
                    </thead>

                    <tbody>

                        {companies.map((company, index) => {

                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td><b>{company.symbolName}</b></td>
                                <td><b>{company.companyName}</b></td>
                                <td>${company.investmentAmount}</td>
                                <td>{company.changePercentage}%</td>
                                <td>${company.latestPrice}</td>
                                <td>{company.strategy}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </Table>
                {error}
                {skeleton}
                <br></br>
                <h4>Stock Report</h4><br />
                {tabs}
                {skeleton}
                {error}
            </div>
        )
    }
}

export default Stats
