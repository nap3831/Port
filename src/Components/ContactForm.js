import React, { Component } from 'react';
import axios from 'axios';
class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            facebook: '',
            line: '',
            text: '',
            isTrue: false
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFacebook = this.onChangeFacebook.bind(this);
        this.onChangeLine = this.onChangeLine.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validationForm = this.validationForm.bind(this);
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeLine(e) {
        this.setState({
            line: e.target.value
        })
    }
    onChangeFacebook(e) {
        this.setState({
            facebook: e.target.value
        })
    }
    onChangeText(e) {
        this.setState({
            text: e.target.value
        })
    }
    validationForm() {
        if (this.state.name != null && this.state.text != null) {
            this.this.setState({
                isTrue: true
            })
        }
    }
    onSubmit(e) {
        console.log(this.state.isTrue)
        e.preventDefault();
        let dataToDb = {
            name: this.state.name,
            facebook: this.state.facebook,
            line: this.state.line,
            text: this.state.text
        }

        axios.post('http://localhost:8000/contact', dataToDb)
            .then(res => console.log(res))
        this.setState({
            name: '',
            facebook: '',
            line: '',
            text: '',
            isTrue: false
        })
        // window.location = '/';
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h4>ชื่อผู้ส่ง</h4>
                        </div>
                        <div className="form-group col-12 my-5">
                            <input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={this.onChangeName} />
                        </div>
                        <div className="col-12">
                            <h4>โซเชียลสำหรับติดต่อ</h4>
                        </div>
                        <div className="form-group col-md-6 my-5">
                            <label >facebook</label>
                            <input type="text" className="form-control" placeholder="facebook" value={this.state.facebook} onChange={this.onChangeFacebook} />
                            <br />
                        </div>
                        <div className="form-group col-md-6 my-5">
                            <label >line</label>
                            <input type="text" className="form-control" placeholder="line" value={this.state.line} onChange={this.onChangeLine} />
                        </div>
                        <div className="col-12">
                            <h4>ข้อความ</h4>
                        </div>
                        <div className="form-group col-12 ">
                            <textarea className="form-control" type="text" rows="6" placeholder="detail text" value={this.state.text} onChange={this.onChangeText}></textarea>
                        </div>
                        <div className="col-12">
                        <button type="button" className="btn btn-primary w-50" onClick={this.onSubmit}>ส่งข้อมูล</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;
