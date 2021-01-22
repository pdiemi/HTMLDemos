function validateForm(){
 
    if(document.myForm.name.value == ""){
        alert("Name cannot be empty")
        document.myForm.name.focus()
        return false
    }
    if(document.myForm.email.value == ""){
        alert("Email cannot be empty")
        document.myForm.email.focus()
        return false
    }
    if(document.myForm.country.value == ""){
        alert("Please choose a country")
        document.myForm.country.focus()
        return false
    }
    if(document.myForm.zipcode.value == "" ||
        isNaN(document.myForm.zipcode.value) ||
        document.myForm.zipcode.value.length != 5){
        alert("Zipcode is invalid")
        document.myForm.zipcode.focus()
        return false
    }
    if(document.myForm.gender.value == ""){
        alert("Please choose a gender")
        document.myForm.denger.focus()
        return false
    }
    return true
}
