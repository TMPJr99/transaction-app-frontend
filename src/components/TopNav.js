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
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
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
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Restaurant Login</ModalHeader>
                <ModalBody>
                    <Form>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Link to={'/welcome'}>
                        <Button color="primary" onClick={this.toggle}>
                            Login
            </Button>{" "}
                    </Link>
                </ModalFooter>
            </Modal>
        </div>;
    }
}
