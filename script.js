 // selecting HTML elements
 const userName = document.querySelector('[data-testid="slackUserName"]');
 const profilePics = document.querySelector('[data-testid="slackDisplayImage"]');
 const day = document.querySelector('[data-testid="currentDayofTheWeek"]');
 const time = document.querySelector('[data-testid="currentUTCTime"]');
 const track = document.querySelector('[data-testid="myTrack"]');
 const github = document.querySelector('[data-testid="githubURL"]');
 
 // username
 userName.textContent='Joseph Adeiza Suberu';

 // profile pics
 profilePics.setAttribute('src', './joseph.jpg')
 
 // day of the week 
 const date = new Date();
 
 const days = ['Sunday',
     'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
 ]
 const weekDay = days[date.getDay()];
 day.textContent = weekDay;

 // displaying the time
 function updateTime() {
     const currentTime = new Date();
     const hours = currentTime.getUTCHours();
     const minutes = currentTime.getUTCMinutes();
     const seconds = currentTime.getUTCSeconds();
     const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
     time.textContent = timeString;
 }

 updateTime();
 //update the clock
 setInterval(updateTime, 1000);

 // track
 track.textContent= 'Frontend';

 // github profile
 github.setAttribute('href', 'https://github.com/adexterity')
 github.textContent = 'Github Profile';
