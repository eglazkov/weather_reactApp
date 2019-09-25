(window.webpackJsonpweather_reactapp=window.webpackJsonpweather_reactapp||[]).push([[0],{308:function(e,t,a){e.exports=a(723)},716:function(e,t,a){},721:function(e,t,a){},722:function(e,t,a){},723:function(e,t,a){"use strict";a.r(t);a(309),a(511),a(520);var n=a(2),r=a.n(n),c=a(153),o=a.n(c),i=(a(716),a(99)),s=a(100),l=a(103),u=a(101),p=a(56),b=a(102),f=a(154),d=(a(721),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentTab:"for_week"},a.tabClick=a.tabClick.bind(Object(p.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"tabClick",value:function(e){this.setState({currentTab:e}),this.props.clickTab(e)}},{key:"render",value:function(){var e=this,t=this.props.tabs;return r.a.createElement("div",{className:"tabItems"},r.a.createElement("ol",null,t.map((function(t,a){return r.a.createElement("li",{onClick:e.tabClick.bind(e,t.tabSysName),key:a,className:t.tabSysName+""===e.state.currentTab?"active":null},r.a.createElement("span",null,t.tabName))}))))}}]),t}(n.Component)),h=(a(722),function(){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];this.getNameOfDay=function(t){return"object"===typeof t&&t.getDay||"string"===typeof t?e[new Date(t).getDay()]:""},this.getBrifDate=function(e){return"object"===typeof e&&e.getDay||"string"===typeof e?new Date(e).getDate()+" "+t[new Date(e).getMonth()]:""}}),m=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={};var o=new h;return a.itemClick=a.itemClick.bind(Object(p.a)(a)),a.getNameOfDay=o.getNameOfDay.bind(Object(p.a)(a)),a.getBrifDate=o.getBrifDate.bind(Object(p.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"itemClick",value:function(){console.log("itemClick")}},{key:"render",value:function(){var e=this,t=this.props.weatherItems;return r.a.createElement("div",{className:"listItems"},r.a.createElement("ul",null,t&&t.forecasts&&t.forecasts.length>0?t.forecasts.map((function(t,a){return r.a.createElement("li",{weatherindicator:t.parts.day_short.icon||"null",onClick:e.itemClick.bind(e,t),key:a,className:""},r.a.createElement("span",{className:"leftSpan"},r.a.createElement("span",{className:"dayofWeek"},e.getNameOfDay(t.date)),r.a.createElement("span",null,r.a.createElement("span",{className:"degrees"},t.parts.day_short.temp,"\xb0 / ",t.parts.night_short.temp),r.a.createElement("span",{className:"icon"},r.a.createElement("img",{src:"/icons/"+t.parts.day_short.icon+".svg",alt:""})))),r.a.createElement("span",{className:"briefDate"},e.getBrifDate(t.date)))})):r.a.createElement("h3",{style:{textAlign:"center"}},"No data")))}}]),t}(n.Component),y=function(e){var t=e.period,a=(e.point,0);switch(t){case"for_week":a=7;break;case"for_today":a=1;break;default:a=7}return function(e){return e(w()),fetch("/stub.json",{mode:"no-cors",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Yandex-API-Key":"bbdc0f99-3dba-4a9f-99ed-d0a462fe39c0"}}).then(g).then((function(e){return e.json()})).then((function(t){return t.forecasts=t.forecasts.splice(0,a),e(j(t)),t})).catch((function(t){return e(E(t))}))}};function g(e){if(!e.ok)throw Error(e.statusText);return e}var v="FETCH_GETWEATHER_BEGIN",k="FETCH_GETWEATHER_SUCCESS",O="FETCH_GETWEATHER_FAILURE",w=function(){return{type:v}},j=function(e){return{type:k,payload:e}},E=function(e){return{type:O,payload:{error:e}}},_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={regionCoordinates:{lat:56,lon:38}},a.tabs=[{tabSysName:"for_today",tabName:"Today"},{tabSysName:"for_week",tabName:"Week"}];for(var o=["bkn_-ra_d","bkn_-sn_d","bkn_d","bkn_ra_d","bkn_sn_d","bl","fg_d","ovc","ovc_-ra","ovc_-sn","ovc_ra","ovc_sn","ovc_ts_ra","skc_d"],s={forecasts:[]},b=0;b<o.length;b++)s.forecasts.push({parts:{day_short:{temp:666,icon:o[b]},night_short:{temp:999}}});return a.clickTab=a.clickTab.bind(Object(p.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(y({period:"for_week",point:this.state.regionCoordinates}))}},{key:"clickTab",value:function(e){this.props.dispatch(y({period:e,point:this.state.regionCoordinates}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{tabs:this.tabs,clickTab:this.clickTab}),r.a.createElement(m,{weatherItems:this.props.weatherData}))}}]),t}(n.Component);var D=Object(f.b)((function(e){return{weatherData:e.weatherData.data}}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(88),T=a(306),C=a(307);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(C.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P={data:{},loading:!1,error:null};var I=Object(N.c)({weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return A({},e,{loading:!0,error:null});case k:return A({},e,{loading:!1,data:t.payload});case O:return A({},e,{loading:!1,data:{},error:t.payload.error});default:return e}}}),W=Object(N.d)(I,Object(N.a)(T.a));o.a.render(r.a.createElement(f.a,{store:W},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[308,1,2]]]);
//# sourceMappingURL=main.0b4318e1.chunk.js.map