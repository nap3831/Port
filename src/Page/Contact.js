import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard , faPhoneSquare ,faPaperPlane } from '@fortawesome/fontawesome-free-solid';
class Contact extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ marginTop: '100px', color: '#fff', textAlign: 'center' }}>
                <div className="row">
                    <div className="col-12">
                        <h1> Contact</h1>
                    </div>

                    <div className="col-md-4 col-12 my-5">
                        <div className="card" style={{background:'#fff2f28f' ,border: '1px solid #b6b3b394' }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faIdCard} size="7x" color="#17a2b8" />
                                <hr />
                                <h2>หัวข้อ</h2>
                                <div className="col-12 text-dark">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 my-5 ">
                        <div className="card" style={{background:'#fff2f28f' ,border: '1px solid #b6b3b394' }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faPhoneSquare} size="7x" color="#28a745" />
                                <hr />
                                <h2>หัวข้อ</h2>
                                <div className="col-12 text-dark">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 my-5">
                        <div className="card" style={{background:'#fff2f28f' ,border: '1px solid #b6b3b394' }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faPaperPlane} size="7x" color="#dc3545" />
                                <hr />
                                <h2>หัวข้อ</h2>
                                <div className="col-12 text-dark">
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
