๐ 2022-3-9
## **๐ก Day3 - (2.7 - 2.16๊ฐ)**
๐ ์์์ ๋ฐฐ์ด ๋ด์ฉ๋ค์ ๋ณต์ตํ๊ณ , function(ํจ์), argument(์ธ์), return(๋ฐํ ๊ฐ), prompt, typeof, ์กฐ๊ฑด๋ฌธ์ ๋ํด ๋ฐฐ์ ๋ค. 

<br/>
<br/>

> **๐ฑ Function**  

๐ ๊ณ์ ๋ฐ๋ณตํด์ ์ฌ์ฉํ  ์ ์๋ ์ฝ๋ ์กฐ๊ฐ, ์ด๋ค ์ฝ๋๋ฅผ ์บก์ํํด์ ์คํ์ ์ฌ๋ฌ ๋ฒ ํ  ์ ์๊ฒ ํด์ค๋ค.  

- function ์์ ๋ ๐โโ๏ธ
```js
    console.log("Hello my name is ์ด๋ฆ1");      // ๋ถ ํ์ํ ๋ฐ๋ณต ๋๋ฌด ๋ง๋ค.
    console.log("Hello my name is ์ด๋ฆ2");
    console.log("Hello my name is ์ด๋ฆ3");
    console.log("Hello my name is ์ด๋ฆ4");
    console.log("Hello my name is ์ด๋ฆ5");
    console.log("Hello my name is ์ด๋ฆ6");
```   

- function ์์ ๋ ๐โโ๏ธ
```js
    function SayHello () {
        // function์ด ์คํ ๋  ๋๋ง๋ค ๋ฐ๋ณต ๋  ๋ถ๋ถ
        console.log("Hello!");
    };

    SayHello();             // ์ฌ๋ฌ ๋ฒ ํธ์ถ ๊ฐ๋ฅ
    SayHello();
```   

<br/>
<br/>

> ๐ฑ **Argument** 

๐ function์ ์คํํ๋ ๋์ ์ด๋ค ์ ๋ณด๋ฅผ function์๊ฒ ๋ณด๋ผ ์ ์๋ ๋ฐฉ๋ฒ  

-  function ์์์ data๋ฅผ ๋ฐ๋ ๋ฐฉ๋ฒ โ โ ( ) ์์ ๋ญ๊ฐ๋ฅผ ์ ๋ ๊ฒ.  
    (์ฒซ ๋ฒ์งธ ์์์ฒ๋ผ console.log๋ฅผ ์ฌ๋ฌ๋ฒ ์๋ ฅํ์ง ์์๋ argument๋ง 
    ๋ฐ๊ฟ์ ๊ฐํธํ๊ฒ ๊ฐ์ ๋ถ๋ฌ ์ฌ ์ ์๋ค.)
```js
    function plus(potato, salad) {      // argument์ ์ด๋ฆ ๊ผญ a, b์๋์ด๋ ๊ฐ๋ฅ๐
        console.log(potato + salad);
    }

    // ๋จ, potato๋ function๋ฐ์์๋ ์ ๊ทผํ  ์ ์๋ค.

    plus(5, 10);                    
    plus(1.333, 9898);
    plus(9898, 1.3333);
```  

<br/>
<br/>

> ๐ฑ **Return**  

๐ return์ function์์ ๊ฐ์ ์ ์ฅ ํด ์ฃผ๋ ์ญํ ์ ํ๋ค.  ์ด ๊ฐ์ return value๊ฐ ๋๋ค.๐ฒ  

- return ์์ ๋ ๐โโ๏ธ  

```js
    // ex) ๐ฒ ๊ณ์ฐ๊ธฐ ํจ์

    const calculator = {
        add: function(a, b) {
            console.log(a + b);
        },
        minus: function(a, b) {
            console.log(a - b);
        },
        multi: function(a, b) {
            console.log(a * b);
        },
        div: function(a, b) {
            console.log(a / b);
        },
        powerof: function(a, b) {
            console.log(a ** b);
        },
    };

    calculator.add(3, 4);       // console์ ๊ฒฐ๊ณผ ๋์จ๋ค, ๊ฐ์ด ์ ์ฅ๋์ง๋ ์๋ ์ํ๐ค
    calculator.minus(3, 4);
    calculator.multi(3, 4);
    calculator.div(3, 4);
    calculator.powerof(3, 4);
```  

- return ์์ ๋ ๐โโ๏ธ    

```js
    // ex) ๐ฒ ๊ณ์ฐ๊ธฐ ํจ์

    const calculator = {
        plus: function(a, b) {
            return a + b;
        },
        minus: function(a, b) {
            return a - b;
        },
        time: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            return a / b;
        },
        power: function(a, b) {
            return a ** b;
        },
    };

    // ์ด ๊ฒฐ๊ณผ๋ค์ ์ ๊ธฐ์ ์ผ๋ก ์ฐ๊ฒฐ๋์ด ์๋ค. ์ด๊ฒ์ด console.log์ return์ ์ฐจ์ด

    const plusResult = calculator.plus(2, 3);
    const minusResult = calculator.minus(plusResult, 10);
    const timeResult = calculator.time(10, minusResult);
    const divideResult = calculator.divide(timeResult, plusResult);
    const powerResult = calculator.power(divideResult, minusResult);
```  
- function์ return์ด ์์ ๋ ๋ณ์์ function์ ํ ๋นํ๋ฉด, function์ return์ด ๋ณ์์ ์ ์ฅ๋๋ค.
    - ์๋์ ๊ฒฐ๊ณผ๋ฅผ ์ฝ๋๋ก ๋ฐ๊ณ  ์ถ๋ค๋ฉด โ  
    โ 'ํจ์๋ ์ด๋ค ์ผ์ ์ํํ๊ณ  ๊ฒฐ๊ณผ๋ฅผ ์๋ ค์ฃผ๋ ๊ฒ์ด๋ค'๋ผ๊ณ  ์๊ฐ
```js
    // ex) ๐ ํ๊ตญ๋์ด ๊ณ์ฐ๊ธฐ

    const age = 96;

    function calculateKrAge(ageOfForeigner) {
        return ageOfForeigner + 2;
    }
    

    const KrAge = calculateKrAge(age);      // return์ด ์๋ค๋ฉด ๊ฐ์ ์ ์ฅ ํ  ์ ์๋ค.

    console.log(KrAge);     // ๋ง์ฝ ์์ ์ฝ๋์ return์ด ์์ผ๋ฉด ๊ฒฐ๊ณผ๊ฐ undefined๋ก ๋์จ๋ค.
```  
- ๐ ์์ฃผ ์ค์ํ ๊ฐ๋ โ
    - ํ ๋ฒ returnํ๋ฉด function์ ๋๋๋ค.  
    โ return์ ํ๋ฉด function์ ์๋์ ๋ฉ์ถ๊ณ , ๊ฒฐ๊ณผ ๊ฐ์ returnํ๊ณ  ๋๋๋ค.
```js
    // ์์)

    const calculator = {
        plus: function(a, b) {
            console.log("hello");       // ์ด ์ฝ๋๋ ์๋ โญ
            return a + b;
            console.log("hello");       /**
                                        ์ด ์ฝ๋๋ ์ ๋ ์๋ํ์ง โ 
                                        (returnํ๋ฉด ํจ์๋ ๋๋๊ธฐ ๋๋ฌธ!) 
                                        */ 
        }
    }
```   

<br/>
<br/>


> ๐ฑ **Prompt์ ์ฌ์ฉ๊ณผ typeof, parseInt**  

๐ ๋งค์ฐ ์ค๋ ๋ JS, ์ฌ์ฉ์์ ์๋ ฅ์ ๋ฐ๋ ํจ์
- promt๊ฐ ์คํ๋  ๋๋ js๊ฐ ์ ์ ๋ฉ์ถ๋ค. ์ด๊ฒ์ ๋งค์ฐ ์ค๋๋ js, ์์ฆ์ ์ ์ฐ์ง ์๊ณ  customํ promt๋ฅผ ์ง์  ๋ง๋๋ ์ถ์ธ์ด๋ค.
```js
    const age = prompt("How old are you?");

    console.log(age);   // ์๋ ฅ๋ฐ์ age๋ฅผ ํ์ธ๊ฐ๋ฅํ๋ค.
```
- typeof
    - ์ฌ์ฉ ์ ( ) ์์ ๊ฐ์ ํ์์ ์ ์ ์๋ค.  
```js
    console.log(typeof "15", typeof (15));  // string, number
```   
- parseInt
    - int ํ์์ผ๋ก ๋ณํํด ์ฃผ๋ ํจ์
```js
    const age = parseInt(prompt("How old are you?"));       //์ซ์๊ฐ ์๋๋ฉด NaN ๋์จ๋ค.

    console.log(typeof "15", typeof parseInt("15"));
```
- NaN
    - = ์ซ์๊ฐ ์๋๋ค (Not A Number)
    - isNaN( ) โ ์ด๋ค ๊ฒ์ด NaN์ธ์ง ํ๋ณํ  ๋ ์ฌ์ฉ
    - isNaN( )์ true or false๋ฅผ return ํ๋ค. (boolean)
```js
    const age = parseInt(prompt("How old are you?"));  

    if (isNaN(age)) {
        console.log("Please write a number");       // isNan = true
    }else {
        consoled.log("Thank you for write your age.");      // isNaN = false
    }
```

<br/>
<br/>


> ๐ฑ **Conditionals, ์กฐ๊ฑด๋ฌธ** 

๐ ์กฐ๊ฑด์ด ์ฌ๋ฌ๊ฐ์ง ์ผ ๋, if์ else if, else ์ด์ฉํด์ ์กฐ๊ฑด๋ฌธ ์ฌ์ฉ  
- ์กฐ๊ฑด ํ ๊ฐ์ง์ฉ ์์ ๋
```js
    const age = parseInt(prompt("How old are you?")); 

    if (isNaN(age)) {
        console.log("Please write a number");
    }else if (age< 18){
        console.log("You are too young");
    }else {
        console.log("You can drink");
    }
```         
- ๋ ๊ฐ์ง ์ด์์ ์กฐ๊ฑด์ ๋์์ ๋ง์กฑํด์ผ ํ  ๋
    - AND ๐ &&   โ ๋ ๋ค ๋ง์กฑ
    - OR  ๐  ||  โ ๋ ์ค์ ํ๋๋ง ๋ง์กฑ  

```js
    if (isNaN(age) || age < 0) {    // ์ฌ์ฉ์๊ฐ -์๋ฅผ ์๋ ฅํ  ๋ ์๊ณ  ์ถ๋ค.
        console.log("Please write a real positive number");
    }else if (age< 18){
        console.log("You are too young");
    }else if(age >= 18 && age <=50) {
        console.log("You can drink");
    }else if (age > 50 && age <= 80) {
        console.log("You should exercise");
        // ๐ ์ด ์ฝ๋๊ฐ ๋งจ ๋์ ์์ผ๋ฉด ์์ ์กฐ๊ฑด์ด ๋ ์์๊ธฐ ๋๋ฌธ์ ์คํ๋์ง ์๋๋ค.
    }else if (age === 100) {                            
        console.log("Wow you are wise")
    }else if (age >80) {
        console.log("You can do whatever you want.")
    }
```
- =์ ===์ !==
    - = : ๊ฐ ์ ํ ๋น
    - === : ๊ฐ, ํ์์ด ๊ฐ๋ค
    - !== : ๊ฐ, ํ์์ด ๋ค๋ฅด๋ค

<br/>
<br/>
<br/>

[๐ ๋ชฉ๋ก์ผ๋ก](/README.md)