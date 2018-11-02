import React, { Component } from 'react';
import { Row } from "reactstrap";
import { selectAll } from "../redux/actions";
import { connect } from "react-redux";
import TransactionsItem from "./TransactionsItem";

class TransactionsList extends Component {

    componentDidMount() {
        this.props.selectAll();
    }

    render() {

            if (this.props.transactions) {
                return <div className="TransactionsContainer">
                    <Row>
                        {this.props.transactions.map(transaction => (
                            <TransactionsItem key={transaction.id} transaction={transaction} />
                        ))}
                    </Row>
                </div>;
            } else {
                return <div>Loading...</div>
            }
        }
}
    
const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}


export default connect(mapStateToProps, {selectAll})(TransactionsList);