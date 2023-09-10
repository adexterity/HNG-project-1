 // selecting HTML elements

 const day = document.querySelector('.day');
 const time = document.querySelector('.time');

 
 // day of the week 
 const date = new Date();
 
 const days = [
    'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
 ]
 const weekDay = days[date.getDay()];
 day.textContent = weekDay;

 // displaying the time
 function updateTime() {
     const date = new Date();
     time.textContent = date.getTime();
 }

 updateTime();
 //update the clock
 setInterval(updateTime, 1);

