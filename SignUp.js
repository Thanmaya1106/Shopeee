let form = document.querySelector("form")
console.log(form)

//with inbuilt menthod onsubmit
//preventDefault() is used to avoid the default behaviour of form
form.onsubmit =(e)=>{
    e.preventDefault()
    console.log("form Triggered")

let inputTag = document.querySelectorAll("input")
console.log(inputTag)

// inputTag.forEach((item) =>{
//     // console.log(item.name + ":" + item.value)
// })

let formObjData = {}
inputTag.forEach((item) =>{

    if(item.type == "radio" && item.type=="checkbox"){
         if(item.checked == true)
         {
             formObjData[item.name] = item.value
         }
    }
    else{
        formObjData[item.name] = item.value
    }
    
})
console.log(formObjData)


// let finalData = JSON.stringify(formObjData)
// console.log(finalData)

// localStorage.setItem("userInfo",finalData)

localStorage.setItem("userInfo", JSON.stringify(formObjData))


alert("User register Successful")
window.location.href= "./index.html"

}
