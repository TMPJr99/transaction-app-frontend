import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, } from 'react-bootstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




class Landing extends Component {

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
    return(
      <div>
        <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  
    <Nav pullRight>
      <NavItem eventKey={1} onClick={this.toggle}>
        Login/SignUp
      </NavItem>

     
    </Nav>
  </Navbar.Collapse>
</Navbar>

{/* login modal */}
<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

</div>
    )//end
  }
}

export default Landing;
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
//   } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/">LoginUp</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/">SignUp</NavLink>
//               </NavItem>
//               {/* <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown> */}
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
        
//       </div>
//     );
//   }
// }

// export default Example;
