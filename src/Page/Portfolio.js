import React, { Component } from 'react'
import Cardcontent from '../Components/Cardcontent';
import axios from 'axios';
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
            <div className="container" style={{ marginTop: '100px'}}>
                <div className="row">
                    <div className="col-12 display-4 text-center text-white">
                        Portfolio
                    </div>
                    {
                        this.state.data.map((obj,i)=>{
                        return  <Cardcontent key={i} title={obj.title} sTitle={obj.s_tittle} 
                        text={obj.detail} imgSrc={obj.img} id_detial={obj.id}/>
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Portfolio
