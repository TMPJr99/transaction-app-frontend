import React, { Component } from "react";
import {
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { connect } from "react-redux";
import {deleteTransaction, editTransaction} from "../redux/actions"
import { bindActionCreators } from "redux";

class TransactionsItem extends Component {
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return <div className="itemsContainer">
        <Col className="Item" onClick={this.toggle}>
          <p>{this.props.transaction.name}</p>
          <p>{this.props.transaction.amount}</p>
        </Col>

        {/* Details Modal */}

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            {this.props.transaction.name}
            <br />${this.props.transaction.amount}
          </ModalHeader>
          <ModalBody>
            <p>Type: {this.props.transaction.type}</p>
          </ModalBody>
          <ModalFooter>
                <Button className="modalButton" value={this.props.transaction.id} onClick={() => this.props.deleteTransaction(this.props.transaction.id)}>
              Delete
            </Button>
            <Button className="modalButton" onClick={() => this.setState({
                  toggleEditForm: !this.state.toggleEditForm
                })}>
              Edit
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}

const mapDispatchToProps = dispatch => {
    bindActionCreators(
        {
            deleteTransaction,
            editTransaction
        },
        dispatch
    )
}


export default connect(null, mapDispatchToProps) (TransactionsItem);
