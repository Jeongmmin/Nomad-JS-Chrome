// 우리가 할 것 - user에게 질문 -> 누구십니까?
// 이 답을 받는 방법 배울 것이다. vlaue의 값을 기억하는 방법
/**
 * 먼저 html에서 작성해야 한다. 앱을 만드는 중에는 화면이 못나보일 수 있다.
 * 
 */

// // 방법 1 - loginForm도 html element니까!
// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector('input');
// const loginBtn = loginForm.querySelector('button');

// 방법 2
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     console.dir(loginInput);      
//     console.log("click");
// }

// function onLoginBtnClick() {
//     console.dir(loginInput.value);      // input의 value값을 볼 수 있음, 입력하면 보임
//     console.log("click");
// }

/** 
 * loginInput object에서 확인가능한 property -value
 * value - 기본적으로 나의 input안에 있는 텍스트를 의미함*/ 

function onLoginBtnClick() {
    console.log('hello', loginInput.value); // 이렇게하면 문제점 -> value값이 없을 때는 hello 빈칸이 나와서 값이 없다는 것을 명확하게 알 수 없다.
}


loginBtn.addEventListener("click", onLoginBtnClick)