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

  itemClick(){
    console.log('itemClick');
  };



  render() {
    const {weatherItems} = this.props;
    return (
      <div className={'listItems'}>
        <ul>
          {weatherItems && weatherItems.forecasts && weatherItems.forecasts.length > 0 ? weatherItems.forecasts.map((item, index) => {
            return(
              <li weatherindicator={item.parts.day_short.icon || 'null'} onClick={this.itemClick.bind(this, item)} key={index} className={''}>
                <span className={'leftSpan'}>
                  <span className={'dayofWeek'}>{this.getNameOfDay(item.date)}</span>
                  <span>
                    <span className={'degrees'}>{item.parts.day_short.temp}° / {item.parts.night_short.temp}</span>
                    <span className={'icon'}>
                      <img src={'/icons/' + item.parts.day_short.icon + '.svg'} alt={''}/>
                    </span>
                  </span>
                </span>
                <span className={'briefDate'}>{this.getBrifDate(item.date)}</span>
              </li>
            )
          }) : <h3 style={{textAlign: 'center'}}>No data</h3>}
        </ul>
      </div>
    );
  }
}


export default WeatherList;