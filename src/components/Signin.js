import React, { Component } from 'react';

class Signin extends Component {

    render(){
      return (
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
      )
    }
}

export default Signin;
