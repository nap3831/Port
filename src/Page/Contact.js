import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebook from '../Assets/icon/facebook.png';
import line from '../Assets/icon/line.png';
import ContactForm from '../Components/ContactForm';
import Banner from '../Assets/Image/Banner.jpg';
import { faIdCard, faPaperPlane } from '@fortawesome/fontawesome-free-solid';
class Contact extends Component {
    render() {
        return (
            <div style={{ color: '#fff', textAlign: 'center' }}>
                <div className="img-responsive d-block" style={{
                    backgroundImage: `url(${Banner})`, paddingTop: '80px', paddingBottom: '80px', width: '100%', backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 style={{ paddingTop: '110px', paddingBottom: '20%', color: '#f5f5f5' }}>
                                    เกี่ยวกับเรา</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-6 col-12 " >
                            <div className="card" style={{ background: '#0000008f', border: '1px solid #b6b3b394' }}>
                                <div className="card-body" style={{ marginTop: '30px' }}>
                                    <FontAwesomeIcon icon={faIdCard} size="4x" color="#17a2b8" />
                                    <hr />
                                    <h1>ที่อยู่</h1>
                                    <div className="row" style={{ marginTop: '30px' }}>
                                        <div className="col-12 lead" style={{ marginTop: '20px' }}>
                                            ตำบลพันท้ายนรสิงห์ อำเภอเมือง <br />
                                            ถนนพระราม2 จังหวัดสมุทรสาคร 74000
                                </div>
                                        <div className="col-12 lead" style={{ marginTop: '22px' }} >
                                            <a href="tel:096-123-8932" target="_blank" without rel="noopener noreferrer" >
                                                096-123-8932
                                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 " >
                            <div className="card" style={{ background: '#0000008f', border: '1px solid #b6b3b394' }}>
                                <div className="card-body" style={{ marginTop: '33px' }}>
                                    <FontAwesomeIcon icon={faPaperPlane} size="4x" color="#dc3545" />

                                    <hr />
                                    <h1>Social</h1>
                                    <div className="col-12 lead ">
                                        <div className="row my-5">
                                            <div className="col-md-6 col-12">
                                                <a href="https://fb.com/nap2539" target="_blank" without rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff' }}>
                                                    <img src={facebook} alt="logo" width="30px" className="img-responsive" />
                                                    <br />
                                                    FACEBOOK
                                        </a>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <a href="https://fb.com/nap2539" target="_blank" without rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff' }}>
                                                    <img src={line} alt="logo" width="30px" className="img-responsive" />
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
                <div className="row my-5">

                    <ContactForm />
                </div>
            </div>
        )
    }
}

export default Contact
