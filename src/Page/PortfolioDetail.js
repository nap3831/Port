import React, { Component } from 'react'
import axios from 'axios';

class PortfolioDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:8000/article/${id}`)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((obj, i) => {
                        return (
                            <div className="text-center">

                                <h1 style={{ marginTop: '300px'}}>
                                    {obj.title}
                                </h1>
                                <h2 className="mt-5">
                                    {obj.detail}
                                </h2>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default PortfolioDetail
