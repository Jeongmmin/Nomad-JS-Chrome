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
         
          ์ด๋ ๊ฒํ๋ฉด ๋ฌธ์ ์  
          โ value๊ฐ์ด ์์ ๋๋ hello ๋น์นธ์ด ๋์์ ๊ฐ์ด ์๋ค๋ ๊ฒ์ ๋ชํํ๊ฒ ์ ์ ์๋ค.

        */
        console.log('hello', loginInput.value);
        
        // ์กฐ๊ฑด๋ฌธ ์ด์ฉํด์ ์ ์ฝ ๊ฑธ๊ธฐ 
        const username = loginInput.value;
        if (username === "") {
            alert("Please write your name");
        }else if (username.length > 15) {
            alert("Your name is too long.");
        }
        
    }
    // ์ด ๋ฐฉ๋ฒ๋ ๊ด์ฐฎ๊ธฐ๋ ํ์ง๋ง ๋ธ๋ผ์ฐ์ ์ ๊ธฐ๋ณธ๊ธฐ๋ฅ์ ์ฌ์ฉํ๋ ๊ฒ์ด ๋ ์ข๋ค.
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
      ```๐ ์ค์ ๋ก๋ ํจ์ ํธ์ถ โ function(infomation)ํํ๋ก ์คํ โ ์ ๋ณด์ ๋ฌ์ด ๋์์ ์ด๋ฃจ์ด์ง๋ค.๐```  

- ์์์ฝ๋
```js
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");

    /**
      
     ๋ธ๋ผ์ฐ์ ์ ์ด๋ค ๋ด์ฉ์ ์ฃผ๊ณ ๋ฐ๋์ง ์๊ธฐ ์ํด์ argument์ฃผ๊ณ  preventDefault์ถ๊ฐ.
     ์ด๋ฆ์ด ๋ฌด์์ธ์ง๋ ์๊ด์์ - tomato ์ฌ์ฉ

    */ 

    function onLoginSubmit(tomato) {            
        tomato.preventDefault()     // '์๋ก๊ณ ์นจ'์ด๋ผ๋ ๊ธฐ๋ณธ๋์ ๋ง๊ธฐ
        console.log(tomato);    
    }

    
    loginForm.addEventListener('submit', onLoginSubmit);
```
- ๋ชจ๋  function์ ์ฒซ ๋ฒ์งธ argument๋ ํญ์ ์ง๊ธ ๋ง ๋ฒ์ด์ง ์ผ๋ค์ ๋ํ ์ ๋ณด๊ฐ ๋๋ค.   
  ๐ JS๊ฐ ๊ทธ ์ ๋ณด๋ฅผ ๋ฌด๋ฃ๋ก ์ ๊ณตํ๋ค.
- ์ฐ๋ฆฌ๋ ๊ณต๊ฐ๋ง ์ ๊ณตํ๋ฉด ๋๋ค.   
  ๐ argument๊ณต๊ฐ๋ง ์ ๊ณตํ๋ฉด JS๊ฐ ์์์ ๋ฐฉ๊ธ ์ผ์ด๋ event์ ๋ํ ์ ๋ณด๋ฅผ ์ง๋ argument๋ฅผ ์ฑ์๋ฃ๋๋ค.
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


[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)
