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
