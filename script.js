 // selecting HTML elements

 const day = document.querySelector('.day');
 const time = document.querySelector('.time');

 
 // day of the week 
 const date = new Date();
 
 const days = [
     'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'
 ]
 const weekDay = days[date.getDay() - 1];
 day.textContent = weekDay;

 // displaying the time
 function updateTime() {
     const date = new Date();
     time.textContent = date.getTime();
 }

 updateTime();
 //update the clock
 setInterval(updateTime, 100);

