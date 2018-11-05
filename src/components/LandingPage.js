import React, { Component } from 'react';
import TopNav from './TopNav';
import Main from './main';
import Login from './Login';


class LandingPage extends Component {

  state = {
    renderForm: false,
  }

  renderForm = () => {
      this.setState({
        renderForm: this.state.renderForm === true ? false : true,
      })
  }

  renderWhat = () => {
    if(this.state.renderForm === true){
      return (
        <div>
          <TopNav renderForm={this.renderForm}></TopNav>
          <Login></Login>
        </div>
    )
    }else{
      return (<TopNav renderForm={this.renderForm}></TopNav>)
    }
  }


    render() {
        return (
            <div>
                <TopNav></TopNav>
                {/* <Login></Login> */}
              
                    

        </div>
    )
  }
}

export default LandingPage;
