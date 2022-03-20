"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

let names = ["Ben","Joel","Judy","Anne"];
let scores = [88,98,77,88];

const processEntries = () => {
    const inputGrade = parseFloat($("#inputScore").value);
    const inputName = $("#inputName").value;
    if(isNaN(inputGrade))
    {
        window.alert("Please enter a valid number");
    }
    else
    {
        if(inputGrade > -1 && inputGrade < 101)
        {
            let i = scores.lastIndexOf;
            
            scores.push(inputGrade);
            names.push(inputName);
            $("#inputScore").value = "";
            $("#inputName").value = "";
        }
        else
        {
            window.alert("Please enter a valid grade from 0 to 100");
        }
    }
};

const showResults = () => {
    let total = 0;
    let highScore = scores[0];
    let bestStudentIndex = 0;
    for(var i = 0; i < scores.length; i++) 
    {
        total += scores[i];
        if(scores[i] > highScore)
        {
            highScore = scores[i];
            bestStudentIndex = i;
        }
    }
    var avg = (total / scores.length).toFixed(2);
    let results = "";
    results += "Average score : " + avg + " <br>";
    results += "High score : " + names[bestStudentIndex] + " with a score of " + highScore;
    $("#labelResults").innerHTML = results;
    var element = document.getElementById("divResults");
    element.classList.add("visibleDiv");
    element.classList.remove("invisibleDiv");
};

const showScores = () => {
    let results = "";
    for(var i = 0; i < scores.length; i++)
    {
        results += names[i] + " - " + scores[i] + " <br>";
    }
    $("#labelScores").innerHTML = results;
    var element = document.getElementById("divScores");
    element.classList.add("visibleDiv");
    element.classList.remove("invisibleDiv");
};


document.addEventListener("DOMContentLoaded", () => {
 $("#buttonAdd").addEventListener("click", processEntries);
 $("#buttonResults").addEventListener("click", showResults);
 $("#buttonScores").addEventListener("click", showScores);
});