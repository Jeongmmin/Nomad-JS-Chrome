๐ 2022-3-10
## **๐ก Day4 - (3.0 - 3.5๊ฐ)** 

๐ ๋ณธ๊ฒฉ์ ์ผ๋ก HTML๊ณผ JS๋ฅผ ์ฐ๊ฒฐํ๋ ๋ฐฉ๋ฒ์ ๋ํด์ ๋ฐฐ์ฐ๊ณ , JS์์ HTML์ ์กฐ์ํ๋ ๋ฐฉ๋ฒ์ ๋ํด์ ๋ฐฐ์ ๋ค.๐  

<br/>
<br/>


> ๐ฑ **JS ์ฌ์ฉํ๋ ์ด์  โ**

๐ HTML๊ณผ ์ํธ์์ฉ ํ๊ธฐ ์ํด์
    - JS๋ HTML์ element๋ค์ ์์ ์ ๋ฐฉ์์ผ๋ก ์กฐ์๊ฐ๋ฅํ๋ค.
    - JS๋ก HTML์ ์กฐ์ํ๋ฉด ์๋ HTMLํ์ผ์ ์ํฅ์ ์ฃผ์ง ์๊ณ  ๋๋ฆฝ์ ์ผ๋ก ์กฐ์ํ  ์ ์๋ค.

<br/>
<br/>


> ๐ฑ **Document๋ Object โ** 

๐ document๋ ๋ธ๋ผ์ฐ์ ์ ์ด๋ฏธ ์กด์ฌํ๋ Object
- ์ฝ์ ์ฐฝ์ document๋ฅผ ์๋ ฅํ๋ฉด ๊ธด object์์ ์ ์ ์๋ค.  
- html์ JS์ ํํ๋ก ๋ณผ ์ ์๋ค. = JS์์ HTML document Object๋ก ๋ถํฐ ๋ค์ํ property๋ฅผ ๊ฐ์ ธ์ฌ ์ ์๋ค๐
- document์์๋ ๋งค์ฐ ๋ค์ํ property๊ฐ ์กด์ฌํ๋ค. (ex. location, title, className ...)  

```
์๋ Object์์๋ property๋ฅผ ๊ฐ์ง๊ณ  ์ฌ ์ ๋ ์๊ณ , ์์ ๋ ๊ฐ๋ฅํ๋ค.๐ค

๐ document๋ Object, ์ฆ, document๋ ์์ property๋ฅผ ์กฐ์ํ  ์ ์๋ค.๐ฒ
    
    ๐ฅ ์ด๊ฒ์ ๋งค์ฐ ์ค์ํ ํฌ์ธํธ! ๐ฅ
```

<br/>
<br/>


> ๐ฑ **JS์์ HTML ์กฐ์ํ๊ธฐ โ**  

๐ HTML์ ๋ณ๊ฒฝํ์ง ์๊ณ  JS์์ ์กฐ์ํ๋ ๋ฐฉ๋ฒ
- HTML์์ ์กฐ์ํ๋ ค๋ ๊ณณ์ id, class ๋ฑ์ ์ค์ ํ๋ค.
- JS์์ document๋ฅผ ํตํด ํญ๋ชฉ๋ค์ ๊ฐ์ ธ์จ๋ค.
- document ํญ๋ชฉ๋ค์ ๋ณ๊ฒฝํ๋ค.
- โ property๋ฅผ ๊ฐ์ ธ์ค๋ ๋ํ์ ์ธ ๋ฐฉ๋ฒ (ํจ์)
```
๋จ, HTML๊ณผ JS์์ ๋์ผํ๊ฒ ํ๊ธฐ๋์ด ์๋ ์์๋ง ๊ฐ์ ธ์ฌ ์ ์๋ค ๐ฅ
```
- getElementById( ) : id๊ฐ ๋์ผํ ํญ๋ชฉ ์ค ์ฒซ๋ฒ ์งธ ์์๋ฅผ ๊ฐ์ ธ์จ๋ค.
- getElementByCalssName( ) : class๊ฐ ๋์ผํ ํญ๋ชฉ์ ๊ฐ์ ธ์จ๋ค.
- querySelector( ) : ๊ดํธ ์์ ์์์ ๋์ผํ ๊ฒ์ ๊ฐ์ ธ์จ๋ค. element๋ฅผ CSS๋ฐฉ์์ผ๋ก ๊ฒ์ ํ  ์ ์๋ค.๐     
    (ex. .title, #title, .hello h1)
- querySelectorAll( ) : ๊ดํธ ์์ ์์์ ๋์ผํ ๊ฒ์ ๋ชจ๋ ๊ฐ์ ธ์จ๋ค.  

<br/>
- ์์์ฝ๋

```js
    const title = document.getElementById("title");     // title์ด๋ผ๋ id์ ํญ๋ชฉ์ ๊ฐ์ ธ์จ๋ค.

    title.innerHTML = "Got you";        // title ํญ๋ชฉ์ ๋ด๋ถ ๋ด์ฉ์ ๋ณ๊ฒฝ
```   
```js
    getElementByClassName(), getElementsByTagName(), getElementsByName() ๐ [] ๋ฅผ ๋ฐํ!

    querySelector() ๐ ์ฒซ ๋ฒ์งธ ์์ ํ๋๋ง ๋ฐํ!, ์ฃผ๋ก ์ฌ์ฉํ๋ ํจ์

    const title = document.querySelector(".hello");
    const title = document.querySelector(".hello:first-child h1");  // ์ด๋ฐ ๊ฒ๋ ๊ฐ๋ฅ
    
```
    
<br/>
<br/>


> ๐ฑ **Events**  

๐ document์ ํจ์์ธ event๋ค์ ์ด์ฉํ์ฌ JS๋ก HTML์ ์กฐ์ํ  ์ ์๋ค.
- ๐ document๋ HTML์ด app.js๋ฅผ loadํ๊ธฐ ๋๋ฌธ์ ์กด์ฌํ๋ ๊ฒ์ด๋ค!
- ๋ง์ฝ element์ ๋ด๋ถ๊ฐ ๊ถ๊ธํ๋ค๋ฉด โ console.dir( )์ ์ด์ฉํ๋ฉด ๋๋ค.  
object๋ก ํ์๋ element๋ฅผ ๋ณด์ฌ์ค๋ค.
```js
    console.dir(title);
    ๐
    // ์ฝ์์์ ๋ณผ ์ ์๋ ๊ฒ

    ex. onfocus, onclick, onmouseenter, onmouseleave ...
```
- object์์ ๋ด์ฉ์ ๋ฐ๊ฟ ์ ์์ง๋ง, ์ ๋ถ ๋ค ๋ฐ๊ฟ ์ ์๋ ๊ฒ์ ์๋๋ค.   
- ์ฐ๋ฆฌ๊ฐ listenํ๊ณ  ์ถ์ event๋ฅผ ์ฐพ๋ ๊ฐ์ฅ ์ข์ ๋ฐฉ๋ฒ
    - ๐ ๋ฐฉ๋ฒ1 ) ๊ตฌ๊ธ์ ์ฐพ๊ณ  ์ถ์ element์ ์ด๋ฆ + mdn ์ด๋ผ๊ณ  ๊ฒ์ ๐   
                    ex) h1 html element mdn  
                    ๊ทธ ์ค์ Web APIs๋ผ๋ ๋ฌธ์ฅ์ด ํฌํจ๋ ํ์ด์ง ์ฐพ๊ธฐ!  
    - ๐ ๋ฐฉ๋ฒ 2 )  console.dir(h1)ํด์ on~ ์ผ๋ก ์์ํ๋ property์ธ evnet๋ฅผ ๊ด์ฐฐ ๊ฐ๋ฅ  
- ๋ํ์  ์ข๋ฅ
    - click, mouseenter, ์๋ ฅ์ ๋๋ด๊ฑฐ๋, ํค๋ณด๋ ํค๋๋ฅผ ๋, wifi ์ ์ ํด์ ๋  ๋ ... 

```js
    // style๋ณ๊ฒฝ ์์
    title.style.color = "conrflowerblue";         // ์ด๋ฐ์์ผ๋ก ์ฌ์ฉ
```     
- Event ๋ฑ๋กํ๋ ๋ฐฉ๋ฒ
```js
    title.addEventListener("๋์");

    function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "green";
    }

    title.addEventListener("click", handleTitleClick);      // ํจ์๋ฅผ 2๋ฒ ์งธ ์ธ์๋ก ์ ๋ฌ
```  
-  ๐ ์์ ์ฝ๋์์ function์ ์คํํ์ง ์๊ฒ ํ๋ ๊ฒ์ด ๋งค์ฐ ์ค์!! 
    - (function( ) ์ด๋ ๊ฒ ์ฐ๋ฉด ์ ๋จ๐โโ๏ธ)
```js
    // ํจ์ ํธ์ถ? 
    ๐  function( )

    ํ์ง๋ง addEventListenr์์๋ ( )๋ก ํธ์ถํ์ง ์๋๋ค.

    ๐คทโโ๏ธโ ์ ๊ทธ๋ ๊น? โ ์์๋ฅผ 'ํด๋ฆญ' ํ  ๋ JS๊ฐ ํจ์๋ฅผ ํธ์ถํ๊ฒ ๋ง๋ค๊ณ  ์ถ์ ๊ฒ์ด์ง,  
        ํ์์ ํธ์ถํ๋ ค๋ ๊ฒ์ด ์๋๋ค.

    h1.addEventListener("mouseleave", handleMouseLeave); 
    /*
    ์ฆ, ์ด ์ฝ๋์ ์๋ฏธ๋
    ๋๊ตฐ๊ฐ h1์ ํด๋ฆญํ๋ฉด handleMouseLeave ํจ์๋ฅผ ์คํํด! 
    ๋ผ๊ณ  JS์๊ฒ ์๋ ค์ฃผ๋ ๊ฒ 
    */
```  
- JS๋ก style์ ๋ณ๊ฒฝํ  ์ ๋ ์์ง๋ง , ์ด๋ก ์ ์ผ๋ก๋ css์์ ํ๋ ๊ฒ์ด ๋ง๋คโ  
    
<br/>
<br/>


> ๐ฑ **Event ์ฌ์ฉ๋ฐฉ๋ฒ**  

๐ event๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ๋ํด์ ์์๋ณด์!
- ๐ ์ฒซ ๋ฒ์งธ ๋ฐฉ์
    - ๋์ค์ removeEventLister๋ก ์ด๋ฒคํธ ์ญ์ ๋ ๊ฐ๋ฅ
```js
    // target.addEventLister("์ด๋ฒคํธ", ์ด๋ฒคํธ ํจ์๋ช)
    title.addEventListener("mouseleave", handleMouseLeave);
```  
- ๐ ๋ ๋ฒ์งธ ๋ฐฉ์
```js
    // target.on์ด๋ฒคํธ = ์ด๋ฒคํธ ํจ์๋ช
    title.onclick = handleMouseLeave;
```
- [๐ Web APIs ํ์ธํ  ์ ์๋ ์ฃผ์](https://developer.mozilla.org/ko/docs/Web/API/Window)
- document์์ ์ ์ํ์ง ์์๋ ๋ฐ๋ก ๊ฐ์ ธ์ฌ ์ ์๋ ์์
    - body, head, title(์๋ ์กด์ฌํ๋ title ์ ๋ชฉ ๋ถ๋ถ)
```js
        // ์์
    function handleWindowResize() {
        document.body.style.backgroundColor = "tomato"
    }

    window.addEventListener("resize", handleWindowResize);
```  
- clipboard์ ๊ดํ event
    - copy, cut, paste
```js
    function handleCopy() {
        alert("Copier!")
    }

    window.addEventListener("copy", handleCopy);
```  
- wifi์ ๊ดํ event
    - offline, online
```js
    function handleOffline() {
        alert("๐ฑ SOS No wifi!")
    }

    function handleOnline() {
        alert("๐ Are goooood!")
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
```
<br/>
<br/>
<br/>


[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)
