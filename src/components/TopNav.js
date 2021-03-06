import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from "../redux/actions";
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
import "../App.css";


class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        email: "",
        password: ""
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClick() {
    this.props.login(this.state.form);
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
      <div className="myModal">

      <Modal isOpen={this.state.modal} toggle={this.toggle} className="myModal">
        <ModalHeader toggle={this.toggle}>Login/Sign up</ModalHeader>
        <ModalBody>
          <Form onSubmit={() => this.handleClick}>
              <Input type="email" onChange={e => this.setState({form: {email: e.target.value}})} placeholder="Email" />
              <br />
            <Input type="password" onChange={e => this.setState({form: {password: e.target.value}})} placeholder="Password" />
        <ModalFooter>
          <Button color="primary" onClick={this.toggle} type="submit">
            <Link to="/transactions" className="innerLogin"> Login</Link>
          </Button>
        </ModalFooter>
        </Form>
        </ModalBody>
        </Modal>
      </div>

      {/* Modal Ends */}

    </div>;
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    login
  }, dispatch)
export default connect(null, mapDispatchToProps)(TopNav);
