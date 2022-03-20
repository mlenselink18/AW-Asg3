"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

let swMinutes = 0;
let swSeconds = 0;
let swMilliseconds = 0;
var isPaused = true;

const tickStopWatch = () =>
{
    if(!isPaused)
    {
        swMilliseconds++;
        if(swMilliseconds < 10)
        {
            $("#milliseconds").textContent = "0" + swMilliseconds;
        }
        else
        {
            $("#milliseconds").textContent = "0";
        }
        if(swMilliseconds == 10)
        {
            swMilliseconds = 0;
            swSeconds++;
    
            if(swSeconds < 10)
            {
                $("#seconds").textContent = "0" + swSeconds;
            }
            else
            {
                $("#seconds").textContent = swSeconds;
            }
    
            if(swSeconds == 60)
            {
                swSeconds = 0;
                swMinutes++;
                $("#seconds").textContent = "0";
                $("#minutes").textContent = swMinutes;
            }
        }
    }
}

var timer = setInterval(tickStopWatch, 100);

const startStopwatch = () =>{
    isPaused = false;
};

const stopStopwatch = () =>{
    isPaused = true;
};

function resetStopWatch() {
    $("#minutes").textContent = "00";
    $("#seconds").textContent = "00";
    $("#milliseconds").textContent = "00";
    swMilliseconds = 0;
    swSeconds = 0;
    swMinutes = 0;
}

const displayCurrentTime = () =>{
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    if(h > 12)
    {
        $("#clockHours").textContent = h - 12;
        $("#clockMeridian").textContent = "PM";
    }
    else
    {
        $("#clockHours").textContent = h;
        $("#clockMeridian").textContent = "AM";
    }
    if(m < 10)
    {
        $("#clockMinutes").textContent = "0" + m;
    }
    else
    {
        $("#clockMinutes").textContent = m;
    }
    if(s < 10)
    {
        $("#clockSeconds").textContent = "0" + s;
    }
    else
    {
        $("#clockSeconds").textContent = s;
    }
};

setInterval(displayCurrentTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
 $("#buttonStart").addEventListener("click", startStopwatch);
 $("#buttonStop").addEventListener("click", stopStopwatch);
 $("#buttonReset").addEventListener("click", resetStopWatch);
 resetStopWatch();
 //start clock
 displayCurrentTime();
});