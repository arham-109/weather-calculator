let temprature = prompt("Enter the Temp of your Area")

if (temprature >= 50){
    alert("You might have a stroke")
}
else if (temprature < 50 && temprature >= 40){
    alert("It's very hot out there")
}
else if (temprature < 40 && temprature >=30){
    alert("It's hot you should definitely take a water bottle with you")
}
else if (temprature < 30 && temprature >=20){
    alert("Normal Temprature you can probably go out and chill")
}
else if (temprature < 20 && temprature >= 10){
    alert("Jeez it's cold out there")
}
else if (temprature < 10){
    alert("Man!! It's freezing don't go out there")
}
else{
    alert("invalid Input, Please enter Temprature")
}