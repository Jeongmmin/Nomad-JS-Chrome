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

    setTimeout(getClock, 5000)  // 5์ด ๋ค ํ๋ฒ ์คํ
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
