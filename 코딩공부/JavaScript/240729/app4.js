// const loginForm =document.getElementById("login-form")
// const loginInput =loginForm.querySelector("input")
// const loginButton =loginButton.querySelector("button")
const loginInput =document.querySelector("#login-form input")
const loginButton =document.querySelector("#login-form button")

// function onLoginBtnClick() {
//     console.log("hello", loginInput.value)
//     console.log("click");
//}


function onLoginBtnClick() {
   const username=loginInput.value;
   if(username===""){
    alert("please write your name");
   }else if(username.length>15){
        alert("your name is too long")
   }
}

loginButton.addEventListener("click",onLoginBtnClick);