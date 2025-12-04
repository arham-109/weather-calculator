function Calculate() {
    let temprature = document.getElementById("temprature").value

    result = ""

    if (temprature > 50) {
        result = "You might have a stroke"
    }
    else if (temprature >= 40) {
        result = "Its very Hot out there"
    }
    else if (temprature >= 30){
        result="its a little bit hot but take a water bottle with you"
    }
    else if(temprature >=20){
        result="Normal temprature, you can got out and chill"
    }
    else if (temprature >= 10){
        result="Jeez! its cold out there"
    }
    else if(temprature < 10){
        result="Mann!! its freezing"
    }


    document.getElementById("output").innerText = result
}