let utils = function () {

  const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const mothArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  this.getNameOfDay = function(date){
    return ((typeof date === 'object' && date.getDay) || typeof date === 'string') ? daysArray[new Date(date).getDay()] : '';
  };

  this.getBrifDate = function(date){
    return ((typeof date === 'object' && date.getDay) || typeof date === 'string') ? new Date(date).getDate() + ' ' + mothArray[new Date(date).getMonth()] : '';
  };

};

export default utils;