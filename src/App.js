import React , {Component} from 'react';
import {connect} from 'react-redux';
import Header from './components/header';
import WeatherList from './components/weatherList';
import {getWeatherDataByCoordinates} from './actions/getWeatherByCoordinates';

class App extends Component{

  constructor(...args) {
    super(...args);

    this.state = {
      regionCoordinates: {lat: 56, lon: 38}
    };

    this.tabs = [
      {'tabSysName': "for_today", 'tabName': 'Today'},
      {'tabSysName': "for_week", 'tabName': 'Week'}
    ];
    /*--Заглушка

    const icons = ["bkn_-ra_d","bkn_-sn_d","bkn_d","bkn_ra_d","bkn_sn_d","bl","fg_d","ovc","ovc_-ra","ovc_-sn","ovc_ra","ovc_sn","ovc_ts_ra","skc_d"];
    let stub = {
      forecasts: []
    };

    for(let i=0; i<icons.length; i++){
      stub.forecasts.push(
        {
          parts: {
            day_short: {temp: 666, icon: icons[i]},
            night_short: {temp: 999}
          }
        }
      )
    }
    ----*/

    this.clickTab = this.clickTab.bind(this);

  }

  componentDidMount() {
    this.props.dispatch(getWeatherDataByCoordinates({period: 'for_week', point: this.state.regionCoordinates}));
  }

  clickTab(periodName){
    this.props.dispatch(getWeatherDataByCoordinates({period: periodName, point: this.state.regionCoordinates}));
  }

  render() {
    return (
      <div className="App">
        <Header tabs={this.tabs} clickTab={this.clickTab}/>
        <WeatherList weatherItems={this.props.weatherData}/>
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    weatherData: state.weatherData.data
  }
}

export default connect(mapStateToProps)(App);
