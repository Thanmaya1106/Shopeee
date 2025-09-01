let form = document.querySelector("form")
console.log(form)

//with inbuilt menthod onsubmit
//preventDefault() is used to avoid the default behaviour of form
form.onsubmit =(e)=>{
    e.preventDefault()
    console.log("form Triggered")

let inputTag = document.querySelectorAll("input")
console.log(inputTag[0].value)
console.log(inputTag[1].value)

let storedData = JSON.parse(localStorage.getItem("userInfo"))
console.log(storedData)


if(inputTag[0].value==storedData.Email && inputTag[1].value==storedData.Password)
{
    alert("Login Successful")
    window.location.href= "./Home.html"
}
else{
    alert("Mismatch Credentials")
}

}