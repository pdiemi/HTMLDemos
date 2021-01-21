function submitanswers(){
    var total=4
    var score=0
    var q1=document.forms["quizform"]["q1"].value
    var q2=document.forms["quizform"]["q2"].value
    var q3=document.forms["quizform"]["q3"].value
    var q4=document.forms["quizform"]["q4"].value

    for(i=1; i<=total; i++){
        if(eval("q"+i)==null || eval("q"+i)==""){
            alert("Select an answer")
            return false
        }
    }
    var answers=["d","d","d","d"]
    for(i=1; i<=total; i++){
        if(eval("q"+i)==answers[i-1]){
            score++;
        }
    }
    var result=document.getElementById("result")
    result.innerHTML=score+"/"+total
    alert("you score "+score+" out of "+total)
    return false
}