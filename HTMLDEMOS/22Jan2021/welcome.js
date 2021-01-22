function getConfirmation(){
    var value=confirm("Do you want to continue?")
    if(value == true){
        document.getElementById("show").innerHTML="Well.. You have taken a risk..!"
        return true
    }
    else {
        document.getElementById("show").innerHTML="Woohoo...you are saved!"
        return false
    }
}

function getData(){
    var data=prompt("Enter your data")
    document.getElementById("show").innerHTML=data
}

//switch
function getGrade(){
    var grade=prompt("Enter your grade")
    switch(grade){
        case "A": document.getElementById("show").innerHTML="Grade is A"
        break
        case "B": document.getElementById("show").innerHTML="Grade is B"
        break
        default: document.getElementById("show").innerHTML="Grade is incorrect"
        break
    }
}

function callOn(){
    document.getElementById("show").innerHTML="mouse over event"
}

function callOff(){
    document.getElementById("show").innerHTML="mouse out event"
}