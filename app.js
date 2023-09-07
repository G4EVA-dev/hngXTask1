let today = new Date();  //date Object
let weekDay = today.getDay();

//! For The Day of the Week
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = dayNames[weekDay];
document.querySelector('#theDay').innerHTML = `${currentDay}`; 

//! For The UTC Time in milliseconds
let milliseconds = today.getUTCMilliseconds();
document.querySelector('#theTime').innerHTML = `${milliseconds}ms`; 