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
              {this.renderWhat()}
                <img
                    src="https://wallpapercave.com/wp/wp2514435.png"
                    />


        </div>
    )
  }
}

export default LandingPage;
