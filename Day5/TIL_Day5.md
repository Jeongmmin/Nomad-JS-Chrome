๐ 2022-3-11
## **๐ก Day5 - (3.6 - 3.8๊ฐ)** 

> JS๋ฅผ ํตํด์ CSS๋ฅผ ์กฐ์ํ๋ ์ฌ๋ฌ๊ฐ์ง ๋ฐฉ๋ฒ์ ๋ฐฐ์ ๋ค.๐ 

<br/>
<br/>


> ๐ฑ **CSS in Javascript 1๏ธโฃ**  

๐ JS์์์ style๋ก CSS์ ์ ๊ทผํ์ฌ ์กฐ์ํ๋ ๋ฐฉ๋ฒ
- ์์  ์ฝ๋
```js
    const h1 = document.querySelector("div.hello:first-child h1");
    
    function handleTitleClick() {           

        // getter - ๊ฐ์ ๊ฐ์ ธ์ด
        console.log(h1.style.color);
        
        // setter - ๊ฐ์ ์ค์ ํจ
        h1.style.color = "cornflowerblue";
        
        console.log(h1.style.color);
    }

     // console๊ฒฐ๊ณผ : ์ฒ์์ ๋น์นธ์ผ๋ก ๋์ค๊ณ , ๊ทธ ๋ค์๋ถํฐ๋ blue๋ก ๋์จ๋ค.๐๐ปโโ๏ธ
```
- ๋ชฉํ โ
    - ๊ธ์๋ฅผ ๋๋ฅด๋ฉด ๐ต, ํ๋ฒ ๋ ๋๋ฅด๋ฉด ๐ ์์ผ๋ก ๋ณํ๊ฒ
```js
    function handleTitleClick() {           
        if(h1.style.color === "cornflowerblue") {
            h1.style.color = "tomato";
        }else {
            h1.style.color = "cornflowerblue";
        }
    }
    
    h1.addEventListener("click", handleTitleClick);
```
- ์กฐ๊ธ ๋ ๋ฐ์  ๋ ๋ฒ์  (๋ณ์์ ๊ฐ ์ ์ฅํ๊ธฐ)
```js
    function handleTitleClick() {           
        const currentColor = h1.style.color;
        let newColor;   // new color๋ ์๋ฌด๊ฒ๋ ์๋ ๋น์ด์๋ ๋ณ์
        
        if(currentColor === "cornflowerblue") {
            newColor = "tomato";
        }else {
            newColor = "cornflowerblue";
        }
        h1.style.color = newColor;  
        
        ๐

        /** 
             ๐ ์กฐ๊ฑด๋ฌธ๊น์ง๋ง ์คํํ๋ฉด ์ฐ๋ฆฌ h1์๊ฒ๋ ์๋ฌด์ผ๋ ์ผ์ด๋์ง ์๋๋ค. 
            ๋ฐ๋ผ์ ๊ฐ์ ํ ๋นํด์ฃผ์ด์ผ ํ๋ค.
        */ 
    }


    h1.addEventListener("click", handleTitleClick);
```

<br/>
<br/>


> ๐ฑ **CSS in Javascript 2๏ธโฃ**  

๐ element์์ className ๋ณ๊ฒฝ, ์ ๊ฑฐ, ์ถ๊ฐ ํ๋ ๋ฐฉ๋ฒ(๋งค์ฐ ์ถ์ฒ๋๋ ๋ฐฉ๋ฒ์ โ)
- ์์์ฝ๋ - ํด๋ฆญ ์ ๊ธ์์์ ๋ณ๊ฒฝ
```css
    /* CSS์ฝ๋ */

    h1 {
    color: cornflowerblue;
    }

    .active {
        color: tomato;
    }
```
```js
    // JS์ฝ๋
    const h1 = document.querySelector("div.hello:first-child h1");

    function handleTitleClick() { 
    h1.className = "active";
    }

    h1.addEventListener("click", handleTitleClick);
    // ๊ฒฐ๊ณผ : ํด๋ฆญ โ ๊ธ์์์ด ๐ต โ ๐ 
```
- ๋ชฉํ โ โ ํด๋ฆญํ๋ฉด ๐ต โ ๐  ๋๊ณ , ๋ค์ ํด๋ฆญํ๋ฉด ๐  โ ๐ต ๋๋๋ก!
```js
    function handleTitleClick() {
        if( h1.className === "active") {
            h1.className="";
        }else {
            h1.className = "active";
        }
    }

    h1.addEventListener("click", handleTitleClick);
    /** 
    ๊ฒฐ๊ณผ : ๋ชฉํ๋๋ก ๋์ํจ, 
    butโ active๋ผ๋ string ๋ฐ๋ณต์ฌ์ฉ => error์ ์์ง๐ฑ    
    */ 
```
- ๐ฅ ๊ฐ์ ๋ ๋ฒ์  ๐๐ปโโ๏ธ - ์กฐ๊ฑด๋ฌธ ์ฌ์ฉ โ Class๋ฅผ ๋ณ์๋ก ์ ์ฉ
```js
    function handleTitleClick() {

        const clickedClass = "clicked"  
        /** ์ด๋ ๊ฒ ๋ณ๊ฒฝ! ๐ ํ ๋ฒ๋ง ๋ณต๋ถํ๋ฉด ๋์ error๊ฐ๋ฅ์ฑ โ, 
         ๋ํ ๋ณ์๋ฅผ ์๋ชป์ฐ๋ฉด console์์ ์๋ ค์ฃผ๊ฒ ๋จ :  ์ค์ ํ๋ฅ  โ
        */ 

        if( h1.className === clickedClass) {
            h1.className="";
        }else {
            h1.className = clickedClass;
        }
    }
```
- ClassName์ ๋ฌธ์ ์  โ ๐ฑ
    - ๋ง์ฝ element์ ์ด๋ฏธ class๊ฐ ์กด์ฌํ  ๊ฒฝ์ฐ   
      โ event ์คํํ์๋ ๊ธฐ์กด์ class๊ฐ ์ฌ๋ผ์ ธ๋ฒ๋ฆฐ๋ค.
```html
    <div><h1 class="sexy-font">Click me!</h1></div>
    <!-- ์ฌ๊ธฐ์ ํด๋ฆญ ์ className์ด "cliked"๊ฐ ๋๋ ์ฝ๋๋ฅผ ์คํํ๋ฉด -->
    ๐
    <div><h1 class="clicked">Click me!</h1></div>
    <!-- ์ด๋ ๊ฒ ๋์ด๋ฒ๋ฆฐ๋ค๐ฅ โ ๋ค๋ฅธ ๋ฐฉ๋ฒ ํ์ํจโ-->
```

<br/>
<br/>


> ๐ฑ **CSS in Javascript 3๏ธโฃ**  

๐ Class ์ ์ฒด๋ฅผ ๊ต์ฒดํ๋ ๊ฒ์ด ์๋ ์๋ ์ํ์ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ 
- โจ**ClassList**โจ
    - element์ classs๋ด์ฉ๋ฌผ์ ์กฐ์ํ๋ ๊ฒ์ ํ์ฉ๐โโ๏ธ
    - 'contains' ์ธ ์ ์๋ค โ class๊ฐ ํฌํจ๋์ด ์๋์ง ํ์ธ
```js
    const h1 = document.querySelector("div.hello:first-child h1");

    function handleTitleClick() {

        const clickedClass = "clicked";  

        if( h1.classList.contains(clickedClass)) {
            h1.classList.remove(clickedClass);
        }else {
            h1.classList.add(clickedClass);
        }
    }

    /** 
        ์ด์  font class๋ ๊ทธ๋๋ก ์ ์ฉ๋ ์ํ์์
        "clicked" class๋ ์ ์ฉ๊ฐ๋ฅํ๋ค.
    */
```
- ์ต์ข Upgrade ๋ฒ์  ๐ โ **toggle** ์ฌ์ฉ
    - ํ ํฐ์ **toggle** ํ๋ค : ํ ํฐ์ด ์์ผ๋ฉด ์ ๊ฑฐ, ์์ผ๋ฉด ์ถ๊ฐ  
      ex. ๋ถ ๋๊ธฐ - ์ผ๊ธฐ, ์ค๋งํธํฐ Lock - Unlock
```js
    function handleTitleClick() {
        h1.classList.toggle("clicked");
    }

    // ๋งค์ฐ ๊ฐ๋จํ๊ฒ ๋์ผํ ๊ธฐ๋ฅ ์คํ๊ฐ๋ฅ๐
```
- ๋ฌผ๋ก  toggle์ ๋จผ์  ๋ฐฐ์๋ ์ข์๊ฒ ์ง๋ง, ์์ ๊ธฐ๋ฅ์ ์์์ผ toggle์ ํธ๋ฆฌํจ์ ๊ฐ๋ ฌํ๊ฒ ๋๋ ์ ์๋ค.๐ค

<br/>
<br/>
<br/>


[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)
