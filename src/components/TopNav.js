import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Form
} from "reactstrap";
import { Link } from "react-router-dom";

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false,
        };

    }

    toggle() {
        this.setState({
            modal: !this.state.modal ? true : false
        });
    }

    render() {
        return <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img className="morph" src="https://s3-us-west-1.amazonaws.com/morphmenuslogo/logo.png" alt="morph menus logo" />
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem onClick={this.toggle}> Sign In</NavItem>
                </Nav>
            </Navbar>
          
        </div>;
    }
}
