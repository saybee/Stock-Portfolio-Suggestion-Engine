import React, { Component } from 'react';
import { LineChart, Line, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
//import './Output.css'

export class Graph extends Component {

  render() {


    const data = this.props.data.slice(50, 100);
    console.log("GRAPH")

    return (
      <div className="profileview mb-3">Stock Price
        <LineChart width={1100} height={300} data={data} >
          <Line type="monotone" dataKey="high" stroke="#8884d8" />
          <Line type="monotone" dataKey="low" stroke="#000" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis dataKey="high" />
          <YAxis dataKey="low" />
          <Tooltip />
        </LineChart>
        <span style={{ float: "right" }}>Last 50 Days</span>
      </div>
    )
  }
}

export default Graph
