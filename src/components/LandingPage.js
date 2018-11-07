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
        renderForm: this.state.renderForm ? false : true,
      })
  }

  renderWhat = () => {
    if(this.state.renderForm){
      return (
        <div>
          <TopNav renderForm={this.renderForm}></TopNav>
          <Login login={this.props.login}></Login>
        </div>
    )
    }else{
      return (
        <div>
          <TopNav renderForm={this.renderForm}></TopNav>
          </div>
      )
    }
  }


    render() {
        return (
          <div>
            {this.renderWhat}
          </div>
    )
  }
}


export default LandingPage;
