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
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClick() {
    this.props.login()
    .then(()=>this.toggle);
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
          <Form>
              <Input type="email" placeholder="Email" />
              <br />
            <Input type="password" placeholder="Password" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.handleClick}>
            <Link to="/transactions" className="innerLogin"> Login</Link>
          </Button>
        </ModalFooter>
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
