setInterval(time, 1000);
function time()
{
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  if(hours<10){
      hours=`0${hours}`;
  }
  if(minutes<10){
    minutes=`0${minutes}`;
    }
  document.getElementById('time').innerText = hours+":"+minutes;
}