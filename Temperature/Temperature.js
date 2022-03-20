"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const convertTemp = () => {
    const input = parseFloat($("#tempInput").value);
    let output = 0;
    if(isNaN(input))
    {
        focusAndSelect("#tempInput");
        $("#message").textContent = "Please enter a valid number to convert";
        return;
    }
    else
    {
        if($("#radioToCelcius").checked)
        {
            output = (input.toFixed(2)- 32 ) *  5 / 9 ;
        }
        else if($("#radioToFahrenheit").checked)
        {
            output = (input.toFixed(2) * 9 / 5) + 32
            
        }  
        $("#message").textContent = "";
        $("#tempOutput").value = output.toFixed(2);
    }
}

const toCelsius = (input) =>{
    $("#labelInput").textContent  = "Enter F degrees";
    $("#labelOutput").textContent = "Degrees Celcius";
    clearTextBoxes();
};

const toFahrenheit = (input) =>{
    $("#labelInput").textContent = "Enter C degrees";
    $("#labelOutput").textContent = "Degrees Fahrenheit";
};

const clearTextBoxes = () =>{
    $("#tempInput").value = "";
    $("#tempOutput").value = "";
    $("#message").textContent = "";
    clearTextBoxes();
};

const loadRadioButtons = () =>
{
    if(!$("#radioToCelcius").checked && !$("#radioToFahrenheit").checked)
    {
        $("#radioToCelcius").checked = true;
    }
    RadioLabelText();
}

const RadioLabelText = () =>{
    if($("#radioToCelcius").checked)
    {
        $("#labelInput").textContent = "Fahrenheit Input";
        $("#labelOutput").textContent = "Celcius Output";
    }
    else if($("#radioToFahrenheit").checked)
    {
        $("#labelInput").textContent = "Celcius Input";
        $("#labelOutput").textContent = "Fahrenheit Output";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    loadRadioButtons();
    $("#buttonConvert").addEventListener("click", convertTemp);
    $("#buttonClear").addEventListener("click", clearTextBoxes);
    $("#radioToCelcius").addEventListener("click", toCelsius);
    $("#radioToFahrenheit").addEventListener("click", toFahrenheit);
});