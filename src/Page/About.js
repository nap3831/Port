import React, { Component } from 'react'
import Timeline from '../Components/Timeline';
import Banner from '../Assets/Image/Banner.jpg';
class About extends Component {
    render() {
        return (
            <div>
                <div className="img-responsive " style={{
                    backgroundImage: `url(${Banner})`, width: '100%', backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 style={{ paddingTop: '20%', paddingBottom: '20%', color: '#f5f5f5' }}> เกี่ยวกับเรา</h1>
                            </div>
                        </div>
                    </div>
                    {/* TimeLine */}
                </div>
                <Timeline />
            </div >

        )
    }
}

export default About;
