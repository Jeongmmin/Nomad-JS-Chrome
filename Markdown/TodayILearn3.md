๐ 2022-3-17
## **๐ก Day9 - (6.0 - 6.2๊ฐ)** 

> ๐ฒ ๋๋ค์ผ๋ก ๋ช์ธ, ๋ฐฐ๊ฒฝ ์ค์ ํ๊ธฐ (JS์์ ๋ง๋  ์์ Html์ ์ถ๊ฐํ๊ธฐ)

<br/>
<br/>


> ๐ฑ **Array์ ์ ๊ทผํ๊ธฐ**  

๐ ๋๋ค์ผ๋ก ๊ฐ์ ๋ฐ๊ธฐ ์ํด์๋ ๋จผ์  ๋ฐ์ดํฐ๊ฐ ๋ด๊ธด Array์ ์ ๊ทผํ๋ ๋ฐฉ๋ฒ์ ์์์ผ ํ๋ค.
- ์ด๋ป๊ฒ ์ฒซ ๋ฒ ์งธ array์์ ์ ๊ทผํ  ์ ์์๊น?
  - ๋ช์ธ 10๊ฐ๊ฐ ๋ด๊ฒจ์๋ quotes[ ]๊ฐ ์์ ๋    
   โ console.log(quotes[0])์ ์ฌ์ฉํ๋ฉด ๋๋ค.
- ๋ช์ธ์ด 10๊ฐ์ด๋ฏ๋ก index๋ 0 - 9 ๊น์ง์ ๊ฐ์ด ์กด์ฌํ๋ค.
  - ์ฆ! 0 - 9๊น์ง์ ๊ฐ์ ๋๋ค์ผ๋ก ๋ฐ์์ค๋ฉด ๋๋ค.    
   ๐ ์ด๋ป๊ฒ ํ  ์ ์์๊น? ๋๋ค ํจ์๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋ค!

<br/>    
<br/>
<br/>

> ๐ฑ **Math.random( )**  

๐  ์ฌ์ฉ ์ 0 - 1 ์ฌ์ด์ ๊ฐ์ ๋๋ค์ผ๋ก ์ป์ ์ ์๋ค.
- ์ฐ๋ฆฌ๊ฐ ํ์ํ ์ซ์๋ 0 - 9 ๊น์ง ์ธ๋ฐ, ์ด๋ป๊ฒ ์ฌ์ฉํ๋ฉด ๋ ๊น? ๐ค    
  โ ๐ก ๋๋ค์ผ๋ก ๋์จ ๊ฐ์ * 10์ ํด์ฃผ๋ฉด ๋๋ค.    
- 0 - 9 ๊น์ง์ ๊ฐ์ ๊ตฌํ์ง๋ง, ๋ค์ ์์์ ์ด ์๋ค.    
  โ ๐ก ์ฌ๋ฆผ / ๋ฐ์ฌ๋ฆผ / ๋ด๋ฆผ ํด์ฃผ๋ฉด ๋๋ค.    
  - Math.round() โ ๋ฐ์ฌ๋ฆผ
  - Math.ceil() โ ์ฌ๋ฆผ
  - Math.floor() โ ๋ด๋ฆผ
- ์ด ์ค์์ floor( )๋ฅผ ์ฌ์ฉํ  ๊ฒ์ด๋ค.
- ์์ ์ฝ๋
```js
    const TodaysQuote = quotes[Math.floor(Math.random() * 10)];
```
- ๊ฐ์  ํ์ ์ฌํญ
  - X 10 ์ ํ๋ฉด ํญ์ array์ data๊ฐ 10๊ฐ ์ธ ๊ฒ๋ง ์ฌ์ฉ๊ฐ๋ฅํ๋ค. 


<br/>    
<br/>
<br/>

> ๐ฑ **length ์ฌ์ฉํ๊ธฐ**  

๐  ๋ฐฐ์ด.length = ๋ฐฐ์ด์ ๊ธธ์ด๋ฅผ ๊ตฌํด์ค๋ค.
- length๋ฅผ ์ฌ์ฉํ๋ฉด data๊ฐ 10๊ฐ ์ธ ๊ฒ ์ธ์ data๊ฐ ์ถ๊ฐ๋๊ฑฐ๋ ์ญ์ ๋์ด๋ ๊ทธ ๊ธธ์ด๋งํผ์ ๋๋ค ์ซ์๋ฅผ ์ป์ ์ ์๋ค.      
- ๋ฐฐ์ด์ด 10๊ฐ ์ผ ๋ ๋๋ค ์ซ์๋ 10์ ์ ๊ทผํ  ์ ์๋ค.  
  โ 0 - 1 ์ฌ์ด์ ์์ * 10์ ๊ฐ์ด๊ธฐ ๋๋ฌธ!    
  โ ํ์ง๋ง ๋ฐฐ์ด์ index๋ **0๋ถํฐ** ์์๋๊ธฐ ๋๋ฌธ์ (์ต์ข ๊ธธ์ด -1) ๊น์ง์ ๊ฐ๋ง ์์ผ๋ฉด ๋๋ค.
- ์์์ฝ๋(๋ช์ธ)
```html
    <!-- html -->

    <div id="quote">
      <span></span>
      <span></span>
```

```js
    // js
    const quotes = [{
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacรฉ",
      },
    ... // ์๋ต, ์ด 10๊ฐ ๋ฃ๊ธฐ
    ];

    const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = TodaysQuote.quote;
    author.innerText = TodaysQuote.author;
```

<br/>    
<br/>
<br/>

> ๐ฑ **๋๋ค ๋ฐฐ๊ฒฝ ๋ฃ๊ธฐ**  

๐  ๋ช์ธ์ ๋ฃ์ ๋์ ๊ฐ์ ๋ฐฉ๋ฒ ์ฌ์ฉ
- ํ๋ก์ ํธ ํด๋์ imgํด๋ ๋ง๋ค๊ณ , ๋๋ค์ผ๋ก ์ธ ์ด๋ฏธ์ง ๋ฃ๊ธฐ
- ์ด๋ฏธ์ง ์ด๋ฆ์ผ๋ก ๋ฐฐ์ด ๋ง๋ค๊ธฐ
```js
    const images = ["0.jpg", "1.jpg", "2.jpg"];
```  
- ๋๋ค ํจ์ ๋ง๋ค๊ธฐ
```js
    const chosenImage = images[Math.floor(Math.random() * images.length)];
```
- css ๋ฐฐ๊ฒฝ์ผ๋ก ์ ์ฉํ๊ธฐ ์ํด ๋ง๋ค์ด ๋๊ธฐ
```css
    img {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: fadeIn 0.5s linear;
    }
```
- ๋๋ค ์ด๋ฏธ์ง๋ฅผ ๋ฐฐ๊ฒฝ์ผ๋ก ์ถ๊ฐํด์ฃผ๋๋ก js ์ค์ ํ๊ธฐ
```js
    const bgImage = document.createElement("img");
    bgImage.src = `./img/${chosenImage}`;
```
- body์ img ์ถ๊ฐํ๊ธฐ
```js
    document.body.appendChild(bgImage);
```


<br/>
<br/>
<br/>


[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)


๐ 2022-3-18
## **๐ก Day10 - (7.0 - 7.8๊ฐ)** 

> ๐ JS๋ก ToDo List ๋ง๋ค๊ธฐ

<br/>
<br/>


> ๐ฑ **ToDo List ๊ธฐ๋ณธ ํ ์ค๋น**  

๐ ์ผ๋จ ํ์ํ ์์๋ค์ ์ด๋ค ๊ฒ์ด ์๋์ง ์์๋ณด์.
- Form
  - ์ฌ์ฉ์๊ฐ todo ์๋ ฅ โ ์ ์ถํ๋ ํํ๊ฐ ํ์ํ๋ค.
- List
  - ์๋ ฅํ todo๋ฅผ ๋์ดํด์ผ ๋๋ค.
- input
  - ์ฌ์ฉ์์๊ฒ todo๋ฅผ ์๋ ฅ ๋ฐ์์ผ ํ๋ค.
  
- ์์ ์ฝ๋
```html
    <form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
    <ul id="todo-list"></ul>
```
```js
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = document.querySelector("#todo-form input");
    const toDoList = document.getElementById("todo-list");

    function paintToDo(newTodo) {       
      const li = document.createElement("li");        
      const span = document.createElement("span");    
      li.appendChild(span);                      
      span.innerText = newTodo;                   
      toDoList.appendChild(li);                  
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value; 
      toDoInput.value = "";  
      paintToDo(newTodo);     
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);
```
- ์ฃผ๋ชฉํ  ๋งํ ์ฝ๋
```js
    // ๋์ค์ button๋ ์ถ๊ฐํ๊ธฐ ์ํด์ span์ผ๋ก ๋ง๋ ๋ค
    li.appendChild(span);    
    
    /** 
    ToDo๋ ์๋ ฅ๋ฐ์ value๋๋ก ๊ฐ๊ฐ ํ ์ค์ฉ ์กด์ฌํ๋ค.
    input์ ํ์ฌ value๋ฅผ ์๋ก์ด ๋ณ์์ ๋ณต์ฌํ๊ณ  ์๋ค. 
    ๋ณต์ฌ ํ ๊ฒ์ด๋ฏ๋ก ๋ค์์ input์ ๋ญํด๋ ์๋ฌด ์ง์ฅ์ด ์๋ค.
    */ 
    const newTodo = toDoInput.value; 

    // todo Input์ ๋น์ด ์๋ ์ํ๋ก ๋ง๋ค์ด ์ค๋ค.
    toDoInput.value = "";   
    
    // paintToDo์ newTodo๋ฅผ ์ธ์๋ก ์ฃผ๋ฉด์ ํธ์ถํ๋ค.
    paintToDo(newTodo); 
```
- ๊ทธ ์ธ ํด๊ฒฐ์ฌํญ
  - form์ด submit ํ ์๋ก๊ณ ์นจ ๋์ง ์๋๋ก ๊ธฐ๋ณธ๋์ ๋ง๊ธฐ - preventDefault( ) ์ฌ์ฉ
  - todo๋ฅผ ์ง์ฐ๋ ๋ฒํผ๋ ๋ง๋ค์ด ๋ณด์.
  - ์๋ก๊ณ ์นจ ๋ค์๋ ์๋ ฅํ todo๊ฐ ์ฌ๋ผ์ง์ง ์๋๋ก ๋ง๋ค์.


<br/>    
<br/>
<br/>

> ๐ฑ **Delete ToDos**  

๐  todo ์ญ์  ๋ฒํผ ๋ง๋ค๊ธฐ
- ์กฐ๊ฑด
  - ์ด ๋ฒํผ์ event๋ฅผ ์์ ํด์ผ ํ๋ค.
  - append๋ ๋ง์ง๋ง์ ๋ฃ์ด์ฃผ์ด์ผ ํ๋ค. 
    ("todo list + ์ญ์ ๋ฒํผ"์ด ๋ฆฌ์คํธ์ ํ ์์ด๋ค. ๊ฐ์ ๋ค ๋ง๋  ํ li์ append!)
- ์ญ์  ๋ฒํผ ๋ง๋ค๊ธฐ
  - ๋ฒํผ ํ๊ทธ ๋ง๋ค๊ธฐ โ ์์ ๋ค์ด๊ฐ ์์ ๋ฃ๊ธฐ (del, x) โ ์ด๋ฒคํธ ์์ ํ  ์ ์๊ฒ ์ค์ 
```js
    function paintToDo(newTodo) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerText = newTodo;

      const button = document.createElement("button");    //button ๋ง๋ค๊ธฐ
      button.innerText = "โ";                            // button ์์ x ์ด๋ชจํฐ์ฝ ๋ฃ๊ธฐ
      button.addEventListener("click", deleteToDo);       // ๋ฒํผ ์ด๋ฒคํธ ์์ 

      li.appendChild(span);                               
      li.appendChild(button);                             
      toDoList.appendChild(li);                          
    }
```
- ์์๋ฅผ ์ญ์ ํ๋ deleteToDo ํจ์ ๋ง๋ค๊ธฐ
  - ์ฌ๋ฌ๊ฐ์ todo์ค์ ์ด๋ค ๊ฒ์ ์ง์์ผ ํ ์ง ์์์ผ ํ๋ค.
  - click์ด๋ฒคํธ๋ฅผ console๋ก ํ์ธํด๋ณด๋ฉด Path์์ ๋ฒํผ์ด li์ ํฌํจ๋์ด ์๋ ๊ฒ์ ์ ์ ์๋ค.  
- deleteToDo ์ฝ๋
```js
    function deleteToDo(event) {                        
      const li = event.target.parentElement;          
      li.remove();
    }
```



<br/>    
<br/>
<br/>

 
> ๐ฑ **Save ToDos**  

๐  ์๋ก๊ณ ์นจํด๋ ์ฌ๋ผ์ง์ง ์๋๋ก ์ ์ฅํ๊ธฐ.
- toDos๋ผ๋ ์ด๋ฆ์ ๋น ๋ฐฐ์ด ์ ์ธํ๊ธฐ
```js
    const toDos = [];
```       
- ์๋ก์ด todo๊ฐ ์๊ธฐ๋ฉด toDos ๋ฐฐ์ด์ ์ถ๊ฐ๋๋๋ก ์ค์ 
```js
    toDos.push(newTodo);
```
- localStorage์ toDos[] ์ ์ฅํ๋ ํจ์ ๋ง๋ค๊ธฐ 
  (์ง๋๋ฒ greeting์ฒ๋ผ string ํํ๋ก ์ ์ฅํด์ผ ํ๋ค.)
```js
    function saveToDos() {
      localStorage.setItem("todos", JSON.stringify(toDos));
    }
```
- paintToDo(newTodo)๋ค์ saveToDos ํธ์ถํ๊ธฐ
```js
    saveToDos();
```
- ์ต์ข ์ฝ๋
```js
    const toDos = [];

    function saveToDos() {
      localStorage.setItem("todos", JSON.stringify(toDos));
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value;    
      toDoInput.value = "";
      toDos.push(newTodo);
      paintToDo(newTodo);
      saveToDos();
    }
```

<br/>    
<br/>
<br/>

> ๐ฑ **loading Todos**  

๐ localStrage์ ์ ์ฅ๋ todo list ๊ฐ์ ธ์ค๊ธฐ
- ํ์ฌ๋ localStorage์๋ ์ ์ฅ๋์ด ์์ง๋ง, ํ๋ฉด์๋ ๋ณด์ด์ง ์๋ ์ํ์ด๋ค.
- localStorage์ ์๋ string์ array๋ก ๋ค์ ๋ณํ.
  - string ๊ฐ์ ธ์ค๊ธฐ โ localStorage.getItem( )์ฌ์ฉ
- todos๋ฅผ ์ฌ๋ฌ ๋ฒ ์ฐ๋๊น ์ค์๋ฅผ ์ค์ด๊ธฐ ์ํด์ ๋ณ์๋ก ์ ์ธ.
  - const TODOS_KEY = "todos";
-  savedToDos๊ฐ null์ผ ๊ฐ๋ฅ์ฑ ๊ณ ๋ คํด์ผ ํจ.
- forEach ์ฌ์ฉํด์ ๊ฐ list ํ๋ฉด์ ๋ฟ๋ ค์ฃผ๊ธฐ.
  - js๋ array์ ์๋ ๊ฐ๊ฐ์ item์ ๋ํด fuction์ ์คํํ  ์ ์๊ฒ ํด์ค๋ค.
  - parsedToDos๋ ๋ฐฐ์ด์ด๋ฏ๋ก, forEach๋ผ๋ ๊ฒ์ ๊ฐ์ง๊ณ  ์๋ค. 
    forEach๋ item์ ๋ํด ํจ์๋ฅผ ์คํํ  ์ ์๊ฒ ํด์ค๋ค.
- ๐ก JS Tip!
  - 1๋ฒ, 2๋ฒ ๋ฐฉ๋ฒ์ ๋์ผํ ํํ๋ฒ์ด๋ค.
  - 2๋ฒ : ํ์ดํ ํจ์ ์ฌ์ฉ๋ฐฉ๋ฒ
```js
    // 1๋ฒ
    function sayHello(item) {
      console.log("this is the turn of", item)
    }
    parsedToDos.forEach(sayHello);

    // 2๋ฒ
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));
```
- ์ฐ๋ฆฌ๋ ์ด๋ฏธ todo list๋ฅผ ๊ทธ๋ฆฌ๋ paintToDo( )๊ฐ ์๋ค.
  - paintToDo๋ newItem์ด๋ผ๋ ์ธ์๊ฐ ํ์ํ๋ฐ ์ด ์ธ์๊ฐ ๊ณน localStorage์์ ๊ฐ์ ธ์จ parsedTodo์ด๋ฏ๋ก ๊ทธ๋ฅ paintToDo๋ง forEach์ ๋ฃ์ด์ฃผ๋ฉด ๋๋ค.
- loading Todos ์ฝ๋
```js
    const TODOS_KEY = "todos";

    const savedToDos = localStorage.getItem(TODOS_KEY);
  
    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      parsedToDos.forEach(paintToDo);
    }
```
- ์ฌ๊ธฐ๊น์ง ํ์ ๋ ๋ฌธ์ ์ โ
  - ์ด ์ํ๋ ์๋ก ์ ์ฅ๋ list๋ง localStorage์ ์ ์ฅํ๊ณ  ์ด์ ๊ฒ์ ์ง์๋ฒ๋ฆฐ๋ค.
  - ์ด์ ?    
    ์์์ ํญ์ ๋น์ด์๋[ ]์ด๋ผ์ paintToDo๋ฅผ ํธ์ถ ํ  ๋๋ง๋ค ๊ฐ์ ๋ฎ์ด์ฐ๊ธฐ ํ๋ค.
```js
     const toDos = [];
```
  - ํด๊ฒฐ๋ฐฉ์
    - let์ผ๋ก ๋ฐ๊ฟ์ ์๋ฐ์ดํธ ๊ฐ๋ฅํ๋๋ก ์ค์ 
    - localStorage์ ์ด์  list๊ฐ ์์ผ๋ฉด toDos์ parsedToDos๋ฅผ ๋ฃ์ด์ ์ ์ toDo๋ฅผ ๋ณต์.
- ์์  ๋ ์ฝ๋
```js
    let toDos = [];

    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(paintToDo);
    }
```
- ์ถ๊ฐ๋ก ํด๊ฒฐํ  ๋ฌธ์  โ
  - delete๋ฅผ ํด๋ ์๋ก๊ณ ์นจํ๋ฉด ์ด์๋๋ค.
  - localStorage์์ ์ญ์ ๊ฐ ์ ๋์๊ธฐ ๋๋ฌธ์ด๋ค. ์ด ๋ฌธ์ ๋ฅผ ํด๊ฒฐํด๋ณด์.



<br/>
<br/>
<br/>

> ๐ฑ **Delete Todos 2**  

๐ ์ญ์  ๋ฒํผ ๋๋ฅด๋ฉด localStrage์์๋ ์ญ์ ๋๋๋ก ๋ง๋ค๊ธฐ.
- ์ด๋ค todos text๊ฐ ์ง์์ง๋์ง ์์์ผ ํ๋ค. 
  - todos๋ฅผ ๋ง๋ค ๋ id๋ฅผ ์ฃผ๋๋ก ๋ง๋ค์
  - ๋๋ค id ๋ง๋ค๊ธฐ -> Date.now() ์ฌ์ฉ (todo๊ฐ ๋ง๋ค์ด ์ง๋์ ๋ ์ง์ ์๊ฐ)
  - ์ด์ : ์ฌ์ฉ์๊ฐ ์ ์ด๋ text๋ฅผ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ก push
  - ํ์ฌ : object๋ฅผ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ก push
```js
    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value; 
      const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintToDo(newTodoObj);
      saveToDos();
    }
```
- newToDoObj๊ฐ ๋์ผ๋๊น paintTodo์ ๋ด์ฉ์ ์กฐ๊ธ ๋ณ๊ฒฝํด์ฃผ์ด์ผ ํ๋ค.
```js
    function paintToDo(newTodo) {
      const li = document.createElement("li");

       // ๊ฐ list์ id๊ฐ์ ์ค๋ค.
      li.id = newTodo.id;

      const span = document.createElement("span");

       // ์ด๋ ๊ฒ ํด์ฃผ์ง ์์ผ๋ฉด ํ๋ฉด์ objectํํ๋ก ํ์๋๋ค.
      span.innerText = newTodo.text;

      const button = document.createElement("button");
      button.innerText = "โ";
      button.addEventListener("click", deleteToDo);
      li.appendChild(span);
      li.appendChild(button);
      toDoList.appendChild(li);
    }
```
- ์ด์  x ๋ฒํผ์ ๋๋ฅผ ๋ ๊ทธ list์ id๋ฅผ ์ป์ ์ ์์ผ๋ฉด localStorage์์๋ ์ญ์ ๊ฐ ๊ฐ๋ฅ
- array์์ element ์ญ์ ํ๋ ๋ฐฉ๋ฒ?   
  ๐๐ป filter ์ฌ์ฉ
  - ์ค์ ๋ก element๋ฅผ array์์ ์ง์ฐ๋ ๊ฒ์ด ์๋๋ผ ์ง์ฐ๊ณ  ์ถ์ item์ ๋บด๊ณ  ์ array๋ฅผ ๋ง๋ ๋ค. (๋งค์ฐ ์ค์โจ)
  - filter(ํจ์)์ ํํ๋ก ์ฌ์ฉ
  - filter๋ forEach์ฒ๋ผ ๊ฐ item์ ๋ฃ์ด์ ํจ์๋ฅผ ํธ์ถํ๋ค. 
  - array์ item์ ์ ์งํ๊ณ  ์ถ๋ค๋ฉด filter์์ ํจ์๋ ๋ฐ๋์ true๋ฅผ ๋ฆฌํดํด์ผ๋ง ํ๋ค.
  - false๋ฅผ ๋ฆฌํดํ๋ค๋ฉด ์ array์ false๋ฅผ ๋ฆฌํดํ item์ ๋ค์ด๊ฐ์ง ์๋๋ค.
- ์ด ๊ฐ๋์ผ๋ก localStorage์์๋ ์ญ์ ๋๋๋ก ๋ง๋ค์ด๋ณด์.
  - ๋ฒํผ์ ํด๋ฆญํ  ๋๋ง๋ค list์ id๋ฅผ ์ป์ ์ ์๋ค. 
  - array์ ์๋ item์ id !== ํด๋ฆญ ๋ id => ์ array์ ์ถ๊ฐ๋๋๋ก filter๋ฅผ ์ค์ 
```js
    toDos = toDos.filter((toDo) => toDo.id !== li.id);
```
- ๊ทธ๋ฐ๋ฐ ์ฌ๊ธฐ๊น์ง ํ๋ฉด ๋ฌธ์ ๊ฐ ๋ฐ์ํ๋ค.    
  ๐๐ป ๋ณ์์ type ๋๋ฌธ์ ์ ๋๋ก ๋์ํ์ง โ
  - li์ id๋ string, ์ด๊ฒ์ number๋ก ๋ฐ๊พธ์ด์ฃผ์ด์ผ ํ๋ค.
  - ๊ทธ ๋ค์ ์๋ก ๋ง๋ค์ด์ง array๋ฅผ toDos์ ์๋ฐ์ดํธ ํด์ค๋ค.
```js
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
```

<br/>
<br/>
<br/>

> ๐ฑ **Todo List ์์ฑ ๋ฒ์ **  

๐ ์ ์ฒด์ ์ผ๋ก ํด๊ฒฐ ๋ฐฉ์์ด ์ ์ฉ๋ ์ฝ๋

```html
    <form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
    <ul id="todo-list"></ul>
```

```js
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = document.querySelector("#todo-form input");
    const toDoList = document.getElementById("todo-list");

    const TODOS_KEY = "todos";

    let toDos = [];

    function saveToDos() {
      localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteToDo(event) {
      const li = event.target.parentElement;
      li.remove();
      toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
      saveToDos();
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value;
      toDoInput.value = "";
      const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintToDo(newTodoObj);
      saveToDos();
    }

    function paintToDo(newTodo) {
      const li = document.createElement("li");
      li.id = newTodo.id;
      const span = document.createElement("span");
      span.innerText = newTodo.text;
      const button = document.createElement("button");
      button.innerText = "โ";
      button.addEventListener("click", deleteToDo);
      li.appendChild(span);
      li.appendChild(button);
      toDoList.appendChild(li);
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);

    const savedToDos = localStorage.getItem(TODOS_KEY);

    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(paintToDo);
    }
```


<br/>
<br/>
<br/>

[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)


๐ 2022-3-19
## **๐ก Day11 - (8.0 - 8.2๊ฐ)** 

> ๐์ฌ์ฉ์์ ์์น ์ ๋ณด์ โํด๋น ์์น์ ๋ ์จ ํ์ํ๊ธฐ 

<br/>
<br/>

> ๐ฑ **user์ ์๋(latitude) , ๊ฒฝ๋(longitude) ๊ตฌํ๊ธฐ**  

๐  navigator ํจ์๋ฅผ ์ด์ฉํด ์ฌ์ฉ์์ ์์น๋ฅผ ์์๋ด๋ ์ฝ๋ ์์ฑ
- [mdn ๋งํฌ](https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition)
- JavaScript๊ฐ position์ ํตํด์ user์ ์์น๋ฅผ ์ ๋ฌํด์ค.
- position์ object์ด๊ณ , ์๋, ๊ฒฝ๋ ๊ฐ์ด ํฌํจ๋์ด ์๋ค. 
- position( )ํจ์๋ 2๊ฐ์ ์ธ์๊ฐ ํ์ํ๋ค.
	- ์ ์์ ์ผ๋ก ์คํ๋์ ๋์ ํจ์ (onGeoOk)
    - ์คํ ์คํจํ์ ๋์ ํจ์ (onGeoError)
```js
  navigator.geolocation.getCurrentPosition(์คํโญํจ์, ์คํโํจ์)
```
- ์คํ ๐๐ปโโ๏ธํจ์ (onGeoOk), ์คํ๐๐ปโโ๏ธ ํจ์ (onGeoError)๋ก ์ค์ 
- ์์ ์ฝ๋
```js
  function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    }

  function onGeoError() {
    alert("Can't find you. No weather for you.");
    }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```



<br/>    
<br/>
<br/>

> ๐ฑ **OpenweatherApi ์ฌ์ฉ์ค๋น**  

๐ OpenweatherApi์ด์ฉํด์ user์ ํ์ฌ ์์น, ๋ ์จ Data ๋ฐ์์ค๋๋ก ์ค๋นํ๊ธฐ
- https://openweathermap.org
- ํ์๊ฐ์ ํ ๊ฐ์ธ Api key ๋ฐ๊ธ๋ฐ๊ธฐ
- https://openweathermap.org/api
- ๋ก๊ทธ์ธ ํ api doc ๋ชฉ๋ก์ผ๋ก ์ด๋
- current Weather Data api๋ฅผ ์ฌ์ฉํ์ฌ ์์น, ๋ ์จ, ์จ๋ Data ๋ฐ์ ์ฌ ์ ์๋ค.
- ๐ก Tip!
	-  JSON ๋ฐ์ดํฐ๋ฅผ ํธํ๊ฒ ๋ณผ ์ ์๋ ๋ฐฉ๋ฒ
    - ํฌ๋กฌ ํ์ฅ ํ๋ก๊ทธ๋จ [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=ko) ์ค์น
![](https://velog.velcdn.com/images/jmindev/post/0e373212-04d3-42c3-a14a-8af15a553578/image.png)


<br/>    
<br/>
<br/>

> ๐ฑ **OpenweatherApi ์ฌ์ฉํ๊ธฐ**  

๐ user์ ํ์ฌ ์์น, ๋ ์จ Data ๋ฐ์์ค๊ธฐ
```
  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

- ์ด ์ฃผ์์ ์์์ ๊ตฌํ lat, lon, api key๋ฅผ ๋ฃ์ ํ ํฌ๋กฌ ์ฃผ์์ฐฝ์ ๊ฒ์ํด๋ณธ ๋ค ๊ฐ์ด ์ ๋์จ๋ค๋ฉด ๋ค์ ๊ณผ์ ์ ์งํํ  ์ ์๋ค.
- ์ด์  url์์ ํ์ํ ๊ฐ์ getํด๋ณผ ๊ฒ์ด๋ค.
	- ๋งํฌ๋ฅผ ํด๋ฆญํ๋ฉด ๋ธ๋ผ์ฐ์ ๊ฐ ์ฃผ์๋ก ์ด๋ํด์ ์๋ตํ์ฌ ๊ฐ์ ๋ณด์ฌ์ค๋ค. 
    - javaScript๋ ๋งํฌ๋ฅผ ๋๋ฅด๋ ๋์  fetch๋ฅผ ์ฌ์ฉํด์ url์ call ํด์ค๋ค.
- ์ป๊ณ ์ํ๋ ๋ฐ์ดํฐ
	- ์ฐ๋ฆฌ๊ฐ ์๋ ์ฅ์์ ์ด๋ฆ (์์ธ, ๋ถ์ฐ...)
	- ์ฅ์์ ๋ ์จ (๋ง์, ํ๋ฆ, ๋น...)
    - ๊ธฐ์จ (์ง๊ธ์ ํ์จ์จ๋๋ก ๋์ด์๋๋ฐ, ์ญ์จ์จ๋๋ก ๋ฐ๊พธ๊ธฐ ์ํด์ api doc์ ์ดํด๋ณผ ํ์๊ฐ ์๋ค.)
- ํ์จ(Fahrenheit) โ ์ญ์จ(Celsius) ๋ณํ๋ฐฉ๋ฒ
	- units์ ์ฌ์ฉํ๋ฉด ๋๋ค.
	- ๊ฐ๊ฐimperial(ํ์จ), metric(์ญ์จ), standard(์ ๋์จ๋)๋ฅผ ์๋ฏธ
    - url ๋์ &units=metric์ ๋ถ์ด๋ฉด ์ญ์จ์จ๋๊ฐ ํฌํจ๋ ๊ฒฐ๊ณผ๋ฅผ ์ป์ ์ ์๋ค.
```js
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
```
- fetch๊ฐ ์ผ์ด๋๋ ๊ฒ์ ๊ฐ๋จํ์ง ์์ ๊ณผ์ ์ด๋ค.
	- fetch๋ promise์ด๋ค.
    - promise๋ ๋น์ฅ ๋ญ๊ฐ ์ผ์ด๋์ง ์๊ณ  ์๊ฐ์ด ์ข ์ง๋ ๋ค์ ์ผ์ด๋๋ ๊ฒ์ด๋ค.
    - ๊ธฐ๋ค๋ ธ๋ค๊ฐ ๋ด์ฉ ์ถ์ถ => Data ์ป๊ธฐ ์์๋ก ์ด๋ฃจ์ด์ ธ์๋ค.
    - ์๋์ ํํ๋ก ์ฌ์ฉ
```js
  fetch(url).then(reponse => response.json()).then(data => {
     // ๊ธฐ๋ค๋ฆฐ ํ ์คํํ๋ ค๋ ์ฝ๋ ์๋ ฅํ๋ ๊ณณ
  })

  // ์์)
  fetch(url).then(reponse => response.json()).then(data => {
    console.log(data.name, data.weather[0].main)
  })
```



<br/>    
<br/>
<br/>

 
> ๐ฑ **User์ ์์น, ๋ ์จ, ๊ธฐ์จ ์ป๋ ๋ฐฉ๋ฒ**  

๐  ์ ์ฒด ์ฝ๋ ์ดํด๋ณด๊ธฐ
- json data๋ฅผ ํตํด ์ป์ ์ ์๋ Data
	- ์์น : data.name
  - ๋ ์จ : data.weather[0].main
  - ์ญ์จ๊ธฐ์จ : data.main.temp
- html
```html
	<div id="weather">
      <span></span>
      <span></span>
	</div>
```
- javaScript
```js
	const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  const API_KEY = "๊ฐ์ํ๋ฉด์ ๋ฐ์ api key";


  function onGeoOk(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
          city.innerHTML = data.name;
          weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
          });
      console.log(url);
  }


  function onGeoError() {
  alert("Can't find you. No weather for you.");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```


<br/>
<br/>
<br/>

[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)

