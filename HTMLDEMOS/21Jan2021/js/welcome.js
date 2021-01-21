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
showdata();
showdata2();