import React, {Component} from 'react';
import {itemClick} from './weatherList'
import './header.css';

console.log(itemClick);

class Header extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      currentTab: 'for_week'
    };

    this.tabClick = this.tabClick.bind(this);
  }

  tabClick(tabSysName){
    this.setState({currentTab: tabSysName});
    debugger;
    itemClick();
  }

  render() {
    const {tabs} = this.props;
    return (
      <div className={'tabItems'}>
        <ol>
          {tabs.map((item, index) => {
            return(
              <li onClick={this.tabClick.bind(this, item.tabSysName)} key={index} className={item.tabSysName+'' === this.state.currentTab ? 'active' : null}>
                <span>{item.tabName}</span>
              </li>
            )
          })}
        </ol>
      </div>
    );
  }
}

export default Header;