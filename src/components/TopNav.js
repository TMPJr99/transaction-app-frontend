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
  Form,
  Input
} from "reactstrap";
import { Link } from 'react-router-dom';

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
      {/* Navbar begins */}

      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Transaction App</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem onClick={this.toggle}>Login/Sign up</NavItem>
        </Nav>
      </Navbar>

      {/* Navbar ends */}

      {/* Modal Begins */}

      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Login/Sign up</ModalHeader>
        <ModalBody>
          <Form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>
            <Link to="login"> Login</Link>
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal Ends */}
    </div>;
  }
}
