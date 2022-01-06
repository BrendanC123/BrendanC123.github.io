function renderTime(){
    // Date
    var myDate = new Date();
    var year = myDate.getFullYear();
    if(year < 1000){
        year += 1900
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var daym = myDate.getDate();
    // Date End

    //Time
    var currentTime = newDate();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    //var milliseconds = currentTime.getMilliSeconds();
    if(hours == 24){
        hours = 0;
    }
    
    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" + daym + " " + month + " " + year + " | " + hours + ":" + minutes + ":" + seconds;
    myClock.innerText = "" + daym + " " + month + " " + year + " | " + hours + ":" + minutes + ":" + seconds;
    
    setTimeout("renderTime()", 1000)
    //Time End
}
renderTime();