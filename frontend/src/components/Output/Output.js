import React, { Component } from 'react';
import { Table } from 'antd';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './Output.css';
import axios from 'axios';


class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartDataPie: {
                labels: [],
                datasets: [{
                    label: 'Saved Jobs',
                    data: [],
                    backgroundColor: [
                        // 'rgba(255, 99, 132, 0.6)',
                        'rgba(128,0,0,0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ],
                }]
            },
            chartDataclicks: {
                labels: [],
                datasets: [{
                    label: 'Clicks Per Jobs',
                    data: [],
                    backgroundColor: [
                        // 'rgba(255, 99, 132, 0.6)',
                        'rgba(217, 129, 129, 1)',
                        'rgba(217, 169, 129, 1)',
                        'rgba(172, 217, 129, 1)',
                        'rgba(129, 217, 187, 1)',
                        'rgba(129, 160, 217, 1)',
                        'rgba(150, 129, 217, 1)',
                        'rgba(213, 129, 217, 1)',
                        'rgba(250, 61, 108, 1)',
                        'rgba(168, 61, 250, 1)',
                        'rgba(61, 111, 250, 1)',
                        'rgba(61, 206, 250, 1)',
                        'rgba(61, 250, 203, 1)',
                        'rgba(61, 250, 140, 1)',
                        'rgba(80, 250, 61, 1)',
                        'rgba(206, 250, 61, 1)',
                        'rgba(250, 162, 61, 1)',
                        'rgba(250, 86, 61, 1)',
                        'rgba(129, 160, 217, 1)',
                        'rgba(150, 129, 217, 1)',
                        'rgba(213, 129, 217, 1)',
                        'rgba(250, 61, 108, 1)',
                        'rgba(168, 61, 250, 1)',
                        'rgba(61, 111, 250, 1)',
                    ],
                }]
            },
        }
    }
    componentDidMount() {
        this.setState({
            chartDataclicks: this.props.location.state.detail
        })
        // var data = {
        //     price: 5000,
        //     strategy: ["Ethical Investing", "Growth Investing"],
        // }
        // // axios.defaults.withCredentials = true;
        // var thidstr = "str";
        // axios.post('http://localhost:5000/getdata', data)
        //     .then((response) => {
        //         console.log(" response.data" + response)
        //         console.log(" response.data" + JSON.stringify(response.data))
        //         this.setState({
        //             // chartDataclicks: response.data.weekly
        //         })
        //     })
    }


    render() {
        console.log(this.state.chartDataclicks)
        const columns = [{
            title: 'ABBR',
            dataIndex: 'abbr',
            filters: [{
                text: 'Joe',
                value: 'Joe',
            }, {
                text: 'Jim',
                value: 'Jim',
            }, {
                text: 'Submenu',
                value: 'Submenu',
                children: [{
                    text: 'Green',
                    value: 'Green',
                }, {
                    text: 'Black',
                    value: 'Black',
                }],
            }],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        }, {
            title: 'Company',
            dataIndex: 'company',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        }, {
            title: 'Latest Price',
            dataIndex: 'latestprice',
            filters: [{
                text: 'London',
                value: 'London',
            }, {
                text: 'New York',
                value: 'New York',
            }],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Change percentage',
            dataIndex: 'changePercent'
        },
        {
            title: 'Amount Assigned',
            dataIndex: 'exchange'
        },
        ];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        }];

        function onChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter);
        }
        return (<div>
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <div className="container ad-container1">
                <Pie data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true,
                        title: {
                            display: true,
                            text: 'Portfolio Holding Ratio',
                            fontSize: 25
                        },

                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                fontColor: '#000'
                            }
                        },

                        layout: {
                            padding: {
                                left: 50,
                                right: 0,
                                bottom: 0,
                                top: 0
                            }
                        },
                        tooltips: {
                            enabled: true
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}></Pie>
            </div>
            <div className="container ad-container2">
                <Bar data={this.state.chartDataclick}
                    options={{
                        maintainAspectRatio: true,
                        title: {
                            display: true,
                            text: 'Weekly trend of Portfolio Value',
                            fontSize: 25
                        },

                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                fontColor: '#000'
                            }
                        },

                        layout: {
                            padding: {
                                left: 50,
                                right: 0,
                                bottom: 0,
                                top: 0
                            }
                        },
                        tooltips: {
                            enabled: true
                        },
                        scales: {
                            yAxes: [
                                { stacked: true },
                                // {
                                //     ticks: {
                                //         beginAtZero: true
                                //     }
                                // }
                            ],
                            xAxes: [

                                {
                                    ticks: {
                                        fontSize: 6
                                    },
                                    stacked: true
                                },

                            ]
                        }
                    }}></Bar>
            </div>
        </div>);
    }
}

export default Output;