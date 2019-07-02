import React, { Component } from 'react'
import Cardcontent from '../Components/Cardcontent';
import axios from 'axios';
import Banner from '../Assets/Image/Banner.jpg';

class Portfolio extends Component {

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

                <div className="img-responsive d-block" style={{
                    backgroundImage: `url(${Banner})`, paddingTop: '80px', paddingBottom: '80px', width: '100%', backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 style={{ paddingTop: '110px', paddingBottom: '20%', color: '#f5f5f5' }}>
                                    ผลงานของฉัน</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '100px' }}>
                    <div className="row">
                        {
                            this.state.data.map((obj, i) => {
                                return <Cardcontent key={i} title={obj.title} sTitle={obj.s_tittle}
                                    text={obj.detail} imgSrc={obj.img} id_detial={obj.id} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
