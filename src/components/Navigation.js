import React, {Component} from 'react';
import '../styles/stylesheets/Navigation.css';
import { Bar, Drawer } from './common';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      drawerShowing: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      drawerShowing: !this.state.drawerShowing
    });
  }

  render() {
    return (
      <div className='navigation'>
        <Bar click={this.clickHandler}/>
        <Drawer show={this.state.drawerShowing}/>
      </div>
    );
  }
}

export default Navigation;
