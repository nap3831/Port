import React, { Component } from 'react';
import imgFooter from '../Assets/Image/Footer.jpg';
class Footer extends Component {


    render() {
        return (
            <div>
                <div className="container-fluid" style={{
                    marginTop: '30%', backgroundImage: `url(${imgFooter})`, maxWidth: '100%', backgroundAttachment: 'fixed',
                    backgroundPosition: 'center' , opacity: 0.84,
                    backgroundSize: 'cover'
                }}>
                    <div className="row" >
                        <div className="col-12 my-5 text-center text-white">
                            <h1>Yoottana Nap</h1>
                            <p>09-6123-8932 nap3831@gmail.com</p>
                            <p>189/293 ตำบล พันท้ายนรสิงห์ อำเภอ เมือง</p>
                            <p>ถนน พระราม2 จังหวัดสมุทรสาคร 74000</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ background: '#6e7276' }}>
                    <div className="row">
                        <div className="col-12 text-center " style={{
                            height: '10%', color: 'white'
                            , paddingTop: '4%', paddingBottom: '4%', fontFamily: 'san-serif', fontSize: '10px'
                        }}>
                            CopyRight © 2018 Power By <a href="https://fb.com/nap2539">NapDev</a> All Reserved
                </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default Footer;
