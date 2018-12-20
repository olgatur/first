window.onload = function(){
   
    let objToday = new Date(),
	curHour = objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours(),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),

            
            time = curHour + ":" + curMinute + ":" + curSeconds;
   
            document.getElementsByTagName('div')[0].innerHTML = time;
    
            window.setTimeout(arguments.callee, 1000);
    
  
    
    };
    
