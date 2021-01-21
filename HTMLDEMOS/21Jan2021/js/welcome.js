console.log('Welcome to JavaScript')
document.write("Welcome to JavaScript")
var data=document.getElementById("show")
data.innerHTML="new data"

var mydata=10;
mydata="hello!"

function showdata() {
    var newdata=70
    alert(newdata)
}
function showdata2(){
    alert(mydata)
}
//showdata();
//showdata2();

function collectdata(){
    var nameData=document.getElementById("uname").value
    var emailData=document.getElementById("uemail").value
    console.log(nameData + "\n" + emailData)
}
//Calculator
function add(){
    var x=document.getElementById("x").value
    var y=document.getElementById("y").value
    console.log("x + y = "+ (Number (x) + Number (y)))
}
function sub(){
    var x=document.getElementById("x").value
    var y=document.getElementById("y").value
    console.log("x - y = "+ (Number (x) - Number (y)))
}
function mul(){
    var x=document.getElementById("x").value
    var y=document.getElementById("y").value
    console.log("x * y = "+ (Number (x) * Number (y)))
}