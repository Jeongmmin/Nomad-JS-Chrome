 ๐ 2022-3-14
## **๐ก Day6 - (4.0 - 4.3๊ฐ)** 

> ํจ์๋ ํธ์ถ๋  ๋ ํจ์ ์์ ์ ๋ณด๋ฅผ ๋ด์ ์ํ๋ก ์คํ๋์ด ์ฐ๋ฆฌ์๊ฒ ์ ๋ณด๋ฅผ ์ ๋ฌํด ์ค๋ค.

<br/>
<br/>


> ๐ฑ **Input์ value**  

๐ ์ฌ์ฉ์๊ฐ Input์ ์๋ ฅํ ๊ฐ์ ๋ฐ์์ค๋ ๋ฐฉ๋ฒ์ ์์๋ณด์
- loginInput object์์ ํ์ธ๊ฐ๋ฅํ property โ   
  โ  **value** : ๊ธฐ๋ณธ์ ์ผ๋ก ๋์ input์์ ์๋ ํ์คํธ๋ฅผ ์๋ฏธํจ  

- ์์์ฝ๋
```html
     <!-- HTML ํ์ผ -->

     <!-- ver1 -->
    <div id="login-form">
        <input type="text" placeholder="What is your name?">
        <button>Log In</button>
    </div> 

    <!-- ver2 -->
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <input type="submit" value="Log in">
    </form>

```
<br/>    

```js
    // ver 1 - loginForm๋ html element๋๊น loginForm ์ด์ฉ
    const loginForm = document.getElementById('login-form');
    const loginInput = loginForm.querySelector('input');
    const loginBtn = loginForm.querySelector('button');

    // ver 2 - input๊ณผ button๋ง ๋ฐ๋ก ๊ฐ์ ธ์ค๊ธฐ
    const loginInput = document.querySelector("#login-form input");
    const loginBtn = document.querySelector("#login-form button");

    function onLoginBtnClick() {
      console.dir(loginInput.value);      // input์ value๊ฐ์ ๋ณผ ์ ์์, ์๋ ฅํ๋ฉด ๋ณด์
      console.log("click");
    }
    
    loginBtn.addEventListener("click", onLoginBtnClick) 
```
<br/>
<br/>


> ๐ฑ **Input value์ ์กฐ๊ฑด ๊ฑธ๊ธฐ**  

๐ user๊ฐ ์๋ ฅํ๋ ๊ฐ์ ์ ํจ์ฑ์ ํ์ธํ๋ ๋ฐฉ๋ฒ
- ์์์ฝ๋
```js
    function onLoginBtnClick() {
    /** 
     *  ์ด๋ ๊ฒํ๋ฉด ๋ฌธ์ ์  
     * โ value๊ฐ์ด ์์ ๋๋ hello ๋น์นธ์ด ๋์์ ๊ฐ์ด ์๋ค๋ ๊ฒ์ ๋ชํํ๊ฒ ์ ์ ์๋ค.
    */
    console.log('hello', loginInput.value);
    
    // ์กฐ๊ฑด๋ฌธ ์ด์ฉํด์ ์ ์ฝ ๊ฑธ๊ธฐ 
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    }else if (username.length > 15) {
        alert("Your name is too long.");
    }
    // ์ด ๋ฐฉ๋ฒ๋ ๊ด์ฐฎ๊ธฐ๋ ํ์ง๋ง ๋ธ๋ผ์ฐ์ ์ ๊ธฐ๋ณธ๊ธฐ๋ฅ์ ์ฌ์ฉํ๋ ๊ฒ์ด ๋ ์ข๋ค.
    }
``` 
- ๊ฐ์ ๋ ๋ฐฉ๋ฒ
- input์์ ์กฐ๊ฑด์ ์๋ ฅํ๊ธฐ
  - required : input์ด ๋น์ด์๋ ๊ฐ์ด๋ฉด ์ ๋๋ค.
  - maxlength : value์ ์ต๋๊ธธ์ด๋ฅผ ์ง์ .
```html
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <input type="submit" value="Log in">
    </form> 
```
- ์์ง ์กด์ฌํ๋ ๋ฌธ์ ์ โ
  - form์์ input์ด ์์ผ๋ฉด ์ ์ถ ๋ฒํผ์ ํด๋ฆญํ์ง ์๊ณ , Enter๋ง ๋๋ฌ๋ form ์์ฒด๊ฐ Submit๋๋ค.
  - ํ์ง๋ง Form์ด Submit๋  ๋ ๋ง๋ค ํ์ด์ง๊ฐ ์๋ก๊ณ ์นจ ๋๊ณ , input์ ์ ํ value๊ฐ ์ฌ๋ผ์ง๋ค.๐ฑ
- ์ฆ, Form์ด ์ ์ถ๋  ๋ ํ์ด์ง๊ฐ reload๋๋ ๊ฒ์ ๋ง๊ณ , value๋ฅผ ์ ์ฅํ  ์ ์๋ ๋ฐฉ๋ฒ์ด ํ์ํ๋ค.๐ค

<br/>
<br/>


> ๐ฑ **Event**  

๐ Form์ Submit event ์กฐ์ํ๊ธฐ
- ํ์ด์ง ์๋ก๊ณ ์นจ ๋ง๋ ๋ฐฉ๋ฒ
  - browser๋ Form์์ Input์์ Enter๋ฅผ ๋๋ฅด๋ฉด ์๋ก๊ณ ์นจ + Form submitํ๋๋ก ์ค์ ๋์ด ์๋ค.
  - ์ด ๊ธฐ๋ณธ ๋์์ ๋ง์๋ณผ ๊ฒ์ด๋ค. โ preventdefault() ์ฌ์ฉ  
  ```preventDefault() = ๋ธ๋ผ์ฐ์ ์ ๊ธฐ๋ณธ ๋์์ ๋ง์์ฃผ๋ ํจ์```
- ํจ์๊ฐ ํธ์ถ๋  ๋ ์ผ์ด๋๋ ์ผ
  - ์ด๋๊น์ง ๋ฐฐ์ด๋ด์ฉ์ ํจ์์ ( ) ์์ฑํ๋ฉด ๋ฐ๋ก ์คํํ๋ค๋ ์๋ฏธ๋ผ๋ ๊ฒ!
  - ํ์ง๋ง ์ถ๊ฐ๋ก ์์์ผ ํ  ๊ฐ๋์ด ์๋ค.   
    - ์ ํํ๊ฒ ๋งํ๋ฉด, ๋ธ๋ผ์ฐ์ ๋ onLoginSubmit() ๋ง์ ํ๊ณ  ์๋ ๊ฒ์ด ์๋๋ค!!     
      ```๐ ์ค์ ๋ก๋ ํจ์ ํธ์ถ โ function(infomation)ํํ๋ก **์คํ** โ **์ ๋ณด์ ๋ฌ**์ด ๋์์ ์ด๋ฃจ์ด์ง๋ค.๐```  

- ์์์ฝ๋
```js
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");

    /** 
     * ๋ธ๋ผ์ฐ์ ์ ์ด๋ค ๋ด์ฉ์ ์ฃผ๊ณ ๋ฐ๋์ง ์๊ธฐ ์ํด์ argument์ฃผ๊ณ  preventDefault์ถ๊ฐ.
     * ์ด๋ฆ์ด ๋ฌด์์ธ์ง๋ ์๊ด์์ - tomato ์ฌ์ฉ
     * */ 

    function onLoginSubmit(tomato) {            
    tomato.preventDefault()     // '์๋ก๊ณ ์นจ'์ด๋ผ๋ ๊ธฐ๋ณธ๋์ ๋ง๊ธฐ
    console.log(tomato);    
    }

    
    loginForm.addEventListener('submit', onLoginSubmit);
```
- ๋ชจ๋  function์ ์ฒซ ๋ฒ์งธ argument๋ ํญ์ ์ง๊ธ ๋ง ๋ฒ์ด์ง ์ผ๋ค์ ๋ํ ์ ๋ณด๊ฐ ๋๋ค.   
  JS๊ฐ ๊ทธ ์ ๋ณด๋ฅผ ๋ฌด๋ฃ๋ก ์ ๊ณตํ๋ค.
- ์ฐ๋ฆฌ๋ ๊ณต๊ฐ๋ง ์ ๊ณตํ๋ฉด ๋๋ค.   
  argument๊ณต๊ฐ๋ง ์ ๊ณตํ๋ฉด JS๊ฐ ์์์ ๋ฐฉ๊ธ ์ผ์ด๋ event์ ๋ํ ์ ๋ณด๋ฅผ ์ง๋ argument๋ฅผ ์ฑ์๋ฃ๋๋ค.
- console.dir(argument)๋ก ํ์ธ ๊ฐ๋ฅ
- โจ์ค์ํ Point!   
  โ console์ ๋์ค๋ ์ ๋ณด๊ฐ ๋ฐฉ๊ธ ์คํ๋ event๋ผ๋ ์ !!  
  ex) ์ ๋ณด : submit์ ์ฃผ์ฒด๋? ๋์์? submit๋ ์๊ฐ์?
- ๊ธฐ๋ณธ ๋ชจ์
```js
    function onLoginSubmit(event) {            
        event.preventDefault()
        console.log(event);    
    }
```
- ๋ชจ๋  ๊ฐ๋์ ์ขํฉํ ์์์ฝ๋
```html
     <!-- ver 3 -->
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <input type="submit" value="Log in">
    </form>
    <a href="https://nomadcoders.co">Go to courses</a>
```
```js
    // ๋งํฌ์ Form์ ๊ธฐ๋ณธ ๋์์ ๋ง๊ณ , ๊ทธ value๋ฅผ console.log()๋ก ๊ด์ฐฐํ๋ ๋ฐฉ๋ฒ.

    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const link = document.querySelector("a");

    function handleClick(event) {
        event.preventDefault()
        console.dir(event);
        // alert("clicked!");
    }

    function onLoginSubmit(event) {
        event.preventDefault();
        console.log(loginInput.value);
    }

    link.addEventListener("click", handleClick);
    loginForm.addEventListener("submit",onLoginSubmit)
```

<br/>
<br/>
<br/>

๐ 2022-3-15
## **๐ก Day7 - (4.4 - 4.7๊ฐ)** 

> value getting, saving, loading ํ๋ ๋ฐฉ๋ฒ

<br/>
<br/>


> ๐ฑ **Getting Username**  

๐ ์ฌ์ฉ์๊ฐ Input์ ์๋ ฅํ ๊ฐ์ ํ๋ฉด์ ์ถ๋ ฅํ๊ธฐ
- Form ์ ์ถ ํ Form์ ํ๋ฉด์์ ์ฌ๋ผ์ง๊ฒํ๊ธฐ(CSS ์ด์ฉ)
  - ```CSS class hidden ์ด์ฉํ๊ธฐ [ display : none ]```
- input์ value๋ฅผ username์ผ๋ก ํ ๋น  
  - ```const username = loginInput.value;```

- ์์์ฝ๋
```html
     <!-- HTML ํ์ผ -->

     <form class="hidden" id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <input type="submit" value="Log in">
    </form>

    <h1 id="greeting" class="hidden"></h1>

```
<br/>    

```js
    // js ํ์ผ

    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const loginBtn = document.querySelector("#login-form button");
    const greeting = document.querySelector("#greeting");

    //์ผ๋ฐ์ ์ผ๋ก string๋ง ํฌํจ๋ ๋ณ์๋ ๋๋ฌธ์๋ก ํ๊ธฐํ๊ณ , string์ ์ ์ฅํ๊ณ  ์ถ์ ๋ ์ฌ์ฉ
    const HIDDEN_CLASSNAME = "hidden";
    
    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME)
        
        //์ ์ ๋ค์์ ๋ณ์๋ก ์ ์ฅ
        const username = loginInput.value;  
        
        // "Hello " + username ๋ณด๋ค ํธ๋ฆฌํ ํ๊ธฐ๋ฒ ( `${๊ฐ}` ์ ๊ทํํ์)
        greeting.innerText = `Hello ${username}`;    
        greeting.classList.remove(HIDDEN_CLASSNAME)
    }

    loginForm.addEventListener("submit", onLoginSubmit);
```
<br/>
<br/>


> ๐ฑ **Saving Username**  

๐ ์ฌ์ฉ์๊ฐ ์๋ ฅํ Input์ value๋ฅผ ์ ์ฅํด๋๋ ๋ฐฉ๋ฒ
- ```LocalStorage ์ฌ์ฉํ๊ธฐ```
  - ๋ธ๋ผ์ฐ์ ์ ๊ฐ์ ์ ์ฅํ๊ณ  ์ถ์ ๋ ์ฌ์ฉํ๋ค.
  - ๋ฏธ๋ DB์ ๋๋
  - localStorage.```setItem``` : ๊ฐ์ ์ ์ฅํ  ๋ ์ฌ์ฉ
  - localStorage.```getItem``` : ๊ฐ์ ๊ฐ์ ธ์ฌ ๋ ์ฌ์ฉ
  - localStorage.```removeItem``` : ๊ฐ์ ์ง์ธ ๋ ์ฌ์ฉ

- ์์์ฝ๋
```js
    function onLoginSubmit(event) {
      event.preventDefault(); 
      loginForm.classList.add(HIDDEN_CLASSNAME);   
      const username = loginInput.value;  

      // localStorage ์ฌ์ฉ
      localStorage.setItem("username", username);

      greeting.innerText = `Hello ${username}`;    
      greeting.classList.remove(HIDDEN_CLASSNAME)
}
```
- ๊ฐ์ ํ  ๋ฐฉํฅ
  - ํ์ฌ โ ์ด๋ฆ ์๋ ฅ -> ๋ก๊ทธ์ธ๋ฒํผ or ์ํฐ -> Hello ์ด๋ฆ! -> ์ด๋ฆ์ด LocalStorage์ ์ ์ฅ  
    But! ์๋ก๊ณ ์นจ ์ username๊ฐ์ localStrage์ ์์ง๋ง ์ฌ์ ํ form์ ๋ค์ ๋ํ๋๋คโ
  - ๐ localStorage์ 
    - username๊ฐ๐๐ปโโ๏ธ โ Hello ์ด๋ฆ ํ๋ฉด ๋ณด์ฌ์ค  
    - username ๐๐ปโโ๏ธ โ ๋ก๊ทธ์ธ ํผ ๋์ค๋๋ก ์ค์ 





<br/>
<br/>


> ๐ฑ **Loading Username**  

๐ localStorage์ ๊ฐ์ ์ ๋ฎค์ ๋ฐ๋ผ์ ํ๋ฉด์ ๋ค๋ฅด๊ฒ ๋ณด์ด๋๋ก ์ค์ ํ๊ธฐ
- ํด์ผํ  ์ผ
  - username์ด ๋๋ฌด ๋ง์ด ๋ฐ๋ณต๋๊ณ  ์์ โ ์คํ ์ ์ค๋ฅ๊ฐ๋ฅ์ฑ โ USERNAME_KEY๋ก ๋ณ์์ค์ 
- ์์์ฝ๋
```js
    const USERNAME_KEY = "username";
    
    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME)
        const USERNAME_KEY = loginInput.value; 
        localStorage.setItem("USERNAME_KEY", username);
        greeting.innerText = `Hello ${username}`;   
        greeting.classList.remove(HIDDEN_CLASSNAME)
    }

    const savedUsername = localStorage.getItem("USERNAME_KEY");

    // ์ด ๊ตฌ๋ฌธ์ ์์ฑํ๊ธฐ ์ํด form, greeting๋ชจ๋ hidden์ํ๋ก ์์ํ๋ค.
    if (savedUsername === null) {
        // show the form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }else {
        // show the greetings
        greeting.innerText = `Hello ${savedUsername}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
```
- ๊ฐ์  ํ์ํ ์    
 : ๊ฐ์ ๋์์ 2๋ฒ ๋ฐ๋ณตํ๊ณ  ์์   
 onLoginSubmit( )๊ณผ if๋ฌธ์์   
 ๐  ```(greeting.innerText, greeting.classList.remove(HIDDEN_CLASSNAME))``` ๋ฐ๋ณต ๋๋ค.
- ์ด๋ฐ๊ฒ์ ํจ์๋ก ๋ง๋๋ ๊ฒ์ด ๋ ์ข๋ค.   
  โ  ```paintGreetings ๋ผ๋ ํจ์ ๋ง๋ค๊ธฐ```
- ๊ฐ์ ๋ ์ฝ๋
```js
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const loginBtn = document.querySelector("#login-form button");
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";

    const USERNAME_KEY = "username";

    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME)
        const USERNAME_KEY = loginInput.value; 
        localStorage.setItem("USERNAME_KEY", username);
        paintGreetings(username);
    }

    function paintGreetings(username) {
        greeting.innerText = `Hello ${username}`;   
        greeting.classList.remove(HIDDEN_CLASSNAME)
    }
    
    const savedUsername = localStorage.getItem("USERNAME_KEY");

    if (savedUsername === null) {
        // show the form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }else {
        // show the greetings
        paintGreetings(savedUsername);
    }
```
- ```paintGreetingํจ์```๋ฅผ ์ด์ฉํด์ ์ฝ๋ ๋ฐ๋ณต์ ์ค์์ง๋ง, ์ฐ๋ฆฌ๊ฐ ํจ์๋ฅผ ํธ์ถํ๋ ์์น์ ๋ฐ๋ผ ์ ์ ์ ๋ณด๋ ๋ค๋ฅธ ๊ณณ์์ ์ค๊ฒ ๋๋ค.
```  - ์์) 
    - local Storage์ ์ ์ ์ ๋ณด๊ฐ โญ  
       โ ๊ฑฐ๊ธฐ์ ์ ์ ์ ๋ณด๋ฅผ ๋ฐ์์ ์ธ์๋ก ๋ฃ๋๋ค.
       
    - ๋ง์ฝ local storage์ ์ ์ ์ ๋ณด๊ฐ โ   
    โ form์ submit์ ๊ธฐ๋ค๋ฆผ โ form์ด submit๋๋ฉด input์ผ๋ก๋ถํฐ ์ ์ ์ ๋ณด๋ฅผ ๋ฐ์   
    โ input์์ ๋ฐ์ user๋ฅผ ๊ฐ์ง patint Greetings๋ฅผ ํธ์ถ
```



<br/>
<br/>
<br/>

๐ 2022-3-16
## **๐ก Day8 - (5.0 - 5.3๊ฐ)** 

> โฑ ํ์ด๋จธ ๋ง๋ค๊ธฐ

<br/>
<br/>


> ๐ฑ **Interval vs Timeout**  

๐ ๋์ ์ฌ์ฉ๋ฒ๊ณผ ์ฐจ์ด์ ์ ๋ํด์ ์์๋ณด๊ธฐ
- Interval
  - ๋งค๋ฒ ์ผ์ด๋์ผ ํ๋ ์ผ์ ์ฌ์ฉ
  - JS์ ์ด๋ฏธ ๋ด์ฅ๋์ด ์๋ ํจ์
  - **setInterval(ํจ์๋ช, ๋ฐ๋ณต๋  ์๊ฐ(ms))** ์ผ๋ก ์ฌ์ฉํ๋ค. 
- Timeout 
  -  ํ ๋ฒ ์คํ ํ ๋ฐ๋ณต๋์ง ์์
  - ์ค์ ํ ์๊ฐ ๋ค์ ํ ๋ฒ ์คํ๋๋ค. 
  - **setTimeout(ํจ์๋ช, ์คํ๋  ์๊ฐ(ms))** ์ผ๋ก ์ฌ์ฉํ๋ค.
- [๐ Date ๊ด๋ จ ์ธ์คํด์ค ๋ฉ์๋ - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - ex) getDay, getFullYear, getHours, getMinutes, getSeconds...
- ๐ ํ์ด๋จธ์๋ setIntervalํจ์ ์ฌ์ฉํ  ๊ฒ์ด๋ค.
<br/>    

- ์์์ฝ๋
```js
    setInterval(getClock, 1000)  // 1์ด ๋ง๋ค ๊ณ์ ์คํ

    setInterval(getClock, 5000)  // 5์ด ๋ค ํ๋ฒ ์คํ
```
<br/>    

<br/>
<br/>


> ๐ฑ **ํ์ฌ ์๊ฐ ํ์ํ๊ธฐ**  

๐ ๋ณธ๊ฒฉ์ ์ผ๋ก ํ์ฌ ์๊ฐ, ๋ ์ง data ๊ฐ์ ธ์ค๋ ๋ฐฉ๋ฒ ์์๋ณด๊ธฐ
- ์๊ฐ ๊ฐ์ ธ์ค๊ธฐ
  - getHours, getMinutes, getSeconds๋ฅผ ์ฌ์ฉ
- ๋ ์ง ๊ฐ์ ธ์ค๊ธฐ
  - new Date() ์ฌ์ฉ
  - new ๋ถ์ด๋ ์ด์ ?    
    : ๊ทธ๋ฅ date( ); => new date( );๋ฅผ ์ด ๊ฒ์ ๊ทธ๋๋ก string์ผ๋ก ๋ง๋  ๊ฒ,    
     ๋ฐ๋ผ์ gethours๊ฐ์ property๋ฅผ ์ฌ์ฉํ  ์ ์๋ค!
```js
    // new ์ฌ์ฉํ๋ ์ด์ ?

    date( ); === new date( ).toString();
```
    
- ์์ ์ฝ๋
```js
  function getClock() {
    // ๋ ์ง
    const date = new Date();
    // ์, ๋ถ, ์ด ๋ถ๋ฆฌ
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  setInterval(getClock, 1000);
```


- ๊ฐ์ ํ  ์์ ๐ค
  - ์๊ฐ ํ์๊ฐ ํ ์๋ฆฌ ์ผ๋ 01, 02, 03 ์ด๋ฐ ์์ผ๋ก ๋ณด์ด๊ฒ ๋ง๋ค๊ณ  ์ถ๋ค.
  - ์๋ก ๊ณ ์นจ ํ๋ฉด 1์ด ๋ค์ ์๊ฐ์ด ํ์๋๋ค.


<br/>
<br/>


> ๐ฑ **PadStart**  

๐ ์๊ฐ ํ์ 01, 02, 03 ๊ฐ์ด ๋ณด์ด๋๋ก ์์ ํ๊ธฐ
- PadStart
  - ๊ฐ์ง๊ณ  ์๋ string์ ๋ณด๋ค ๊ธธ๊ฒ ๋ง๋ค์ด์ผ ํ  ๋ ์ฌ์ฉ
  - ์ฌ์ฉ๋ฒ :  padStart(๊ฐ์ ธ์ผํ  ์๋ฆฌ์, "๋น์๋ฆฌ์ ์ฑ์ฐ๊ณ  ์ถ์ ์ซ์ ๋๋ ๋ฌธ์")
  - ๐ก ์ฃผ์์ฌํญ    
   : padStart๋ string์๋ง ์ฌ์ฉ๊ฐ๋ฅ -> number๋ string์ผ๋ก ๋ณํํด์ผ ํ๋ค. โ String(๋ณํํ  ์ซ์)
- ์์์ฝ๋
```js
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
```
- hours, minutes, seconds๊ฐ string์ผ๋ก ๋ณํ ๋์ผ๋ฏ๋ก clock์ ๋ฃ์ ๋ณ์์ ํํ๋ ๋ณํ๋๋ค.
```js
    // ๋ณํ ์ 
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    // ๋ณํ ํ
    clock.innerText = `${hours}:${minutes}:${seconds}`;
```
- โ ์ถ๊ฐ๋ก ๋ฐฐ์ด ๊ฒ 
- PadEnd : ๊ฐ์ง string๋ค์ ์๋ฆฌ๋ฅผ ์ฑ์ธ ๋ ์ฌ์ฉ
- string๊ธธ๊ฒ ๋ง๋ค ๋ **์ผํญ ์ฐ์ฐ์**๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๋ ์์


<br/>
<br/>
<br/>    

> ๐ฑ **ํ์ด์ง ๋ก๋ ๋๋ ์๊ฐ ํ์ด๋จธ ์์๋๋๋ก ์ค์ ํ๊ธฐ**  

๐ setInterval๋ง ์ฐ๋ฉด 1์ด ๋ค์ ํ์ด๋จธ๊ฐ ๋์๋๋ค. ์ด ๋ฌธ์ ๋ฅผ ํด๊ฒฐํด๋ณด์
- ํด๊ฒฐ๋ฐฉ๋ฒ
  - setInterval์ด ์์ ๋๊ธฐ ์ ์ getClick ํจ์๋ฅผ ํ ๋ฒ ๋ ํธ์ถํด ์ค๋ค.
 
- ์ต์ข ์ฝ๋
```js
    const clock = document.querySelector("#clock");

    function getClock() {
        const date = new Date();
        
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }


    getClock();
    setInterval(getClock, 1000)
```




<br/>
<br/>
<br/>


[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)
