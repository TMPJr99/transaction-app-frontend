import React, { Component } from 'react';
import { Row } from "reactstrap";
import { selectAll } from "../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import TransactionsItem from "./TransactionsItem";

class TransactionsList extends Component {

    componentDidMount() {
        this.props.selectAll();
    }

    render() {
            if (this.props.transactions) {
                return <div>
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

const mapStateToProps = state => ({
    transactions: state.transactions
  })

const mapDispatchToProps = dispatch => bindActionCreators({
    selectAll
  }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
