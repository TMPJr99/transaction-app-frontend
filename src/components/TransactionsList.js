import React, { Component } from 'react';
import { Row } from "reactstrap";
// IMPORT FETCH TRANSACTIONS ACTION FROM ACTIONS FOLDER
import { connect } from "react-redux";

class TransactionsList extends Component {


    render() {

        render() {
            if (this.props.transactions) {
                return <div className="TransactionsContainer">
                    <Row>
                        {this.props.transactions.map(transaction => (
                            <MenuItem key={transaction.id} transaction={transaction} />
                        ))}
                    </Row>
                </div>;
            } else {
                return <div>Loading...</div>
            }
        }
    }

}

const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}


export default connect(mapStateToProps)(TransactionsList);