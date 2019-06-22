import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            scrolling: false,
            scrollYAxis: 0
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    closeNav() {
        this.setState({
            isOpen: false,
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
            this.setState({ scrollYAxis: this.state.scrollYAxis + 25 });

        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
            this.setState({ scrollYAxis: this.state.scrollYAxis * 0  + 5});
        }
    }

    render() {
        let alpha = {
            background: 'linear-gradient(90deg, #0095ffa6, #000000)'
            , color: '#ffffff', paddingTop: `${this.state.scrollYAxis}px`, paddingBottom: `${this.state.scrollYAxis}px`
            ,transition:'.5s'
        }
        return (
            <div>
                <Navbar className="text-center  fixed-top" style={alpha} dark expand="md">
                    <Link className="navbar-brand" to="/">Yoottana Nap</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="navbarLink">
                                <NavLink to="/" onClick={this.closeNav}>Home</NavLink>
                            </NavItem>
                            <NavItem className="navbarLink">
                                <NavLink to="/About" onClick={this.closeNav}>About</NavLink>
                            </NavItem>
                            <NavItem className="navbarLink">
                                <NavLink to="/Portfolio" onClick={this.closeNav}>Portfolio</NavLink>
                            </NavItem>
                            <NavItem className="navbarLink">
                                <NavLink to="/Contact" onClick={this.closeNav}>Contact</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}
export default Navigation;
