import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
class Cardcontent extends Component {
    render() {
        let { title, sTitle, Text, imgSrc } = this.props;
        return (
            <div className="col-md-4 col-sm-6 col-12">
                <div className="wrap-card-img my-5">
                    <div className="shadows">
                        <Card>
                            <NavLink className="wrapper-card-img" to="/Portdetail">
                                <CardImg className="card-img-top text-center" src="https://miro.medium.com/max/945/0*X0IbmZdrmjAQB_SF.jpg" alt="Card image cap" />
                            </NavLink>
                            <CardBody className="text-center">
                                <CardTitle>{title}
                                What is Lorem Ipsum?
                                </CardTitle>
                                <CardSubtitle>
                                    {sTitle}
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardSubtitle>
                                <CardText>
                                    {Text}
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </CardText>
                                <Link className=" btn btn-primary w-100" to="/Portdetail">
                                    อ่านต่อ
                                </Link>
                            </CardBody>

                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cardcontent
