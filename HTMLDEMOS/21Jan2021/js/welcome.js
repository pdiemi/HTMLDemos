console.log('Welcome to JavaScript')
document.write("Welcome to JavaScript")
var data=document.getElementById("show")
data.innerHTML="new data"

var mydata=10;

function showdata() {
    alert(mydata)
}
function showdata2(){
    alert(mydata)
}
showdata();
showdata2();