import React, { Component } from 'react';
import Slider from '../Components/Slide';
import Cardcontent from '../Components/Cardcontent';
class Home extends Component {
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


                        <Cardcontent />
                        <Cardcontent />
                        <Cardcontent />
                        <Cardcontent />
                        <Cardcontent />
                        <Cardcontent />
                        <Cardcontent />

                    </div>

                </div>
            </div>
        )
    }
}
export default Home;