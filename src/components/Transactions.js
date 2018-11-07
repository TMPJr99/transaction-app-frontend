import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import TransactionsList from "./TransactionsList";
import "../App.css";
import TopNav from "./TopNav";


class Transactions extends Component {
    render() {
        return (
            <div className="transactionsContainer">
                <TopNav />
                <Container>
                    <Row>
                        <TransactionsList />
                    </Row>
                </Container>

            </div>
        )
    }

}

export default Transactions;