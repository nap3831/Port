import React, { Component } from 'react';
import Slider from '../Components/Slide';
import Cardcontent from '../Components/Cardcontent';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/article').then((response) => {
            this.setState({
                data: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Slider />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <h1 className="mt-5 text-white">บทความ</h1>
                            <div className="UnderLineBottom text-white"></div>
                        </div>
                        {this.state.data.map((obj , i) => {
                            return <Cardcontent key={i} title={obj.title} sTitle={obj.s_tittle} text={obj.detail} imgSrc={obj.img} id_detial={obj.id} />
                        })}
                    </div>

                </div>
            </div>
        )
    }
}
export default Home;