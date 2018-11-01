import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import TransactionsList from "./TransactionsList";

class Transactions extends Component {
    render() {
        return (
            <div className="transactionsContainer">
                <Container>
                    <Row>
                        {/* <TransactionsList /> */}
                    </Row>
                </Container>

            </div>
        )
    }

}

export default Transactions;