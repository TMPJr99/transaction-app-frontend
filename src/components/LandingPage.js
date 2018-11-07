import React, { Component } from 'react';
import TopNav from './TopNav';
import "../App.css"

class LandingPage extends Component {
  render() {
    return <div className="Landing">
        <TopNav />
        <div className="innerLanding">
        <h1><b>Get Money</b></h1>
          <p>
            <i>"Too much money ain't enough money"</i> <br />- Lil Wayne
          </p>
        </div>
      </div>;
  }

}


export default LandingPage;
