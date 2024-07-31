const loginInput =document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form ");
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