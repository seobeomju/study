const loginInput =document.querySelector("#login-form input")
//const loginButton =document.querySelector("#login-form button")
const loginForm = document.querySelector("#login-form ");
const link=document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event) {
     event.preventDefault();//브라우저가 기본 동작을 하는 것을 막아줌
     loginForm.classList.add("hidden");
     const username = loginInput.value;
     localStorage.setItem(USERNAME_KEY,username);// key와 value를 저장함
     paintGreetings(username);
}
// function handleLinkClick(event){
//     event.preventDefault();
//     alert("click");
// }
//loginButton.addEventListener("click",onLoginBtnClick);

//loginForm.addEventListener("submit",onLoginSubmit)
//link.addEventListener("click",handleLinkClick)

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername=localStorage.getItem(USERNAME_KEY)
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}