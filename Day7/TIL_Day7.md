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


[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)
