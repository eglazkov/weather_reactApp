import React, {Component} from 'react';
import './weatherList.css';
import utils from "../utils/utils";

class WeatherList extends Component {

  constructor(...args) {
    super(...args);

    this.state = {

    };

    const utilsObj = new utils();
    this.itemClick = this.itemClick.bind(this);
    this.getNameOfDay = utilsObj.getNameOfDay.bind(this);
    this.getBrifDate = utilsObj.getBrifDate.bind(this);

  }

  itemClick(tabSysName){

  }

  render() {
    const {weatherItems} = this.props;
    return (
      <div className={'listItems'}>
        <ul>
          {weatherItems.forecasts.map((item, index) => {
            return(
              <li onClick={this.itemClick.bind(this, item)} key={index} className={''}>
                <span className={'leftSpan'}>
                  <span className={'dayofWeek'}>{this.getNameOfDay(item.date)}</span>
                  <span>
                    <span className={'degrees'}>{item.parts.day_short.temp}° / {item.parts.night_short.temp}</span>
                    <span className={'icon'}>{item.parts.day_short.icon}</span>
                  </span>
                </span>
                <span className={'briefDate'}>{this.getBrifDate(item.date)}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default WeatherList;