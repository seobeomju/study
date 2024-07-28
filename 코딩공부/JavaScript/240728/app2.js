const a =5; //변하지 않는
const b = 2; 

let myName = "nico"; //js에서는 낙타모양을 주로 사용

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello "+myName )

myName="nicolas"// ==let myName="nicolas"-->변화 가능
console.log("your new name "+ myName);

const amIFat = null; //null과 false는 다르다 null은 아무것도 없다
let something;
console.log(amIFat); //null은 자연적으로 생성되지 않는다-->"비어있음"
console.log(something)

const daysOfWeek=["mon","tue","wed","thu","fri","sat"];
console.log(daysOfWeek);

daysOfWeek.push("sun"); //배열의 추가
console.log(daysOfWeek);

// const playerName="nico";
// const playerPoints = 121212;
// const PlayerHandsome = false;
// const playerFat="little bit";
//const player = ["nico",1212,false,"little bit"]

const player ={
    name: "nico",
    points:10,
    fat:true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat=false;
console.log(player);
player.lastName="potato";
player.points=player.points+15;
console.log(player);

function sayHello(nameOfPerson,age){
    console.log("hello my name is "+ nameOfPerson+"and I'm "+ age);
}

sayHello("nico",10);
sayHello("dal",23);
sayHello("lynn",21);

const players={
    name: "nico",
    sayHello2 : function(otherPersonName){
        console.log("hello "+otherPersonName+" nice meet you!");
    },
};
console.log(players.name);
players.sayHello2("lynn");

//calculator
const calculator={
    add : function(a,b){
        console.log(a+b);
    },
    minus : function(a,b){
        console.log(a-b);
    },
    div : function(a,b){
        console.log(a/b);
    },
    multi : function(a,b){
        console.log(a*b);
    },
    power : function(a,b){
        console.log(a**b);
    },
};
calculator.add(5,1);
calculator.minus(5,1);
calculator.div(4,2);
calculator.multi(2,4);
calculator.power(2,2);

const age=96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2;
}

const krAge=calculateKrAge(age);
console.log(krAge);

