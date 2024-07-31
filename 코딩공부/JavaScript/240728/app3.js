//const title = document.querySelector(".hello h1")
const h1 = document.querySelector("div.hello:first-child h1")
//CSS처럼 사용 첫번째 엘러먼트만 가져옴 다 가져올려면 All을 붙여야 함
//getElementID("hello") 앞에 .이 없음 모두 갖고옴 ===querySelector("#hello")
//console.dir(title) title의 구성요소를 볼 수 있다
//on이 붙으면 event
//title.style.color="blue";

function handleTitleClick(){
    // const currentColor=title.style.color;
    // let newColor;
    // if(currentColor==="blue"){
    //     newColor="tomato";
    // } else{
    //     newColor="blue"
    // }
    // title.style.color=newColor;
    
    // const clickedClass="clicked";
    // if (h1.className===clickedClass){
    //     h1.className=""; //className은 앞에를 다 지워버림
    // }else{
    //     h1.className=clickedClass; //JS는 과거에 뭐였든 바꿔버림
    // }    
    
    // const clickedClass="clicked";
    // if (h1.classList.contains(clickedClass)){ 
    //     h1.classList.remove(clickedClass)
    // }else{
    //     h1.classList.add(clickedClass); 
    // }

    h1.classList.toggle("clcked"); //class를 채킹
}
// function handleMouseEnter(){
//     title.innerText="Mouse is here!";
// }
// function handleMouseLeave(){
//     title.innerText="Mouse is gone!";
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copier!");
// }
// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }
// function handleWindowOnline(){
//     alert("ALL GOOD")
// }
//title.addEventListener("click", handleTitleClick);// *()넣지 않음*
h1.onclick = handleTitleClick;
// title.addEventListener("mouseenter",handleMouseEnter);
// title.addEventListener("mouseleave",handleMouseLeave);
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);
