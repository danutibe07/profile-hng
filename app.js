const Time = document.getElementById("currentTime");
const Day = document.getElementById("currentDay");
  
const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[currentDate.getDay()];
const currentTimeInMilliseconds = currentDate.getTime();

Day.innerHTML = `<strong>Current Day:</strong> ${currentDay}`;
Time.innerHTML = `<strong>Current Time (in milliseconds):</strong> ${currentTimeInMilliseconds}`;
