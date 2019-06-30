import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebook from '../Assets/icon/facebook.png';
import line from '../Assets/icon/line.png';
import { faIdCard, faPhoneSquare, faPaperPlane } from '@fortawesome/fontawesome-free-solid';
class Contact extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ marginTop: '100px', color: '#fff', textAlign: 'center' }}>
                <div className="row">
                    <div className="col-12">
                        <h1> Contact</h1>
                    </div>

                    <div className="col-lg-6 col-12 my-5 " >
                        <div className="card" style={{ background: '#fff2f28f', border: '1px solid #b6b3b394' }}>
                            <div className="card-body" style={{marginTop:'30px'}}>
                                <FontAwesomeIcon icon={faIdCard} size="4x" color="#17a2b8" />
                                <hr />
                                <h1>ที่อยู่</h1>
                                <div className="row" style={{marginTop:'30px'}}>
                                    <div className="col-12 lead" style={{marginTop:'20px'}}>
                                        ตำบลพันท้ายนรสิงห์ อำเภอเมือง <br/>
                                        ถนนพระราม2 จังหวัดสมุทรสาคร 74000
                                </div>
                                    <div className="col-12 lead" style={{marginTop:'22px'}} >
                                        <a href="tel:096-123-8932" target="_blank">
                                            096-123-8932
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 my-5 " >
                        <div className="card" style={{ background: '#fff2f28f', border: '1px solid #b6b3b394' }}>
                            <div className="card-body" style={{ marginTop: '33px' }}>
                                <FontAwesomeIcon icon={faPaperPlane} size="4x" color="#dc3545" />

                                <hr />
                                <h1>Social</h1>
                                <div className="col-12 lead ">
                                    <div className="row my-5">
                                        <div className="col-md-6 col-12">
                                            <a href="https://fb.com/nap2539" target="_blank" style={{ textDecoration: 'none', color: '#fff' }}>
                                                <img src={facebook} width="30px" className="img-responsive" />
                                                <br />
                                                FACEBOOK
                                        </a>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <a href="https://fb.com/nap2539" target="_blank" style={{ textDecoration: 'none', color: '#fff' }}>
                                                <img src={line} width="30px" className="img-responsive" />
                                                <br />
                                                LINE
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
