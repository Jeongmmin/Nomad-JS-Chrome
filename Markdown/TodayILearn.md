# π Today I Learn - λ°λλΌ JS ν¬λ‘¬μ±
``` 
 π₯ μ΄ κ°μμ μ΅μ’ λͺ©ν : Momentum νλ‘κ·Έλ¨ ν΄λ‘ μ½λ© νκΈ°  
 ```   


<br/>
<br/>
<br/>  

π 2022-3-7
## **π‘ Day1 - (1 ~ 2.0κ°)**  

> JSμ μ λμ νμ₯ κ°λ₯μ±μ λν΄μ λ°°μ λ€.  

- JS π
    - 1995λ Brendan Eichμ΄ λ¨ 10μΌλ§μ λ§λ  μΈμ΄, λ¬΄νν νμ₯μ±μ κ°μ§κ³  μλ€. ( = μ€λ₯λ λ§μμ)
    - JSλ μ λ§μ μ¬λλ€μ΄ μ°λ μΈμ΄μ΄κ³ , λΈλΌμ°μ μ λ΄μ₯λμ΄ μμΌλ―λ‘ λ°λ‘ μ€μΉν  νμκ° μλ€
    - BEμ μΈμ΄λ λ§€μ° λ€μνμ§λ§, FEμμλ JSλ§ μλ©΄ μ»€λ² κ°λ₯!
- β¨λΈλΌμ°μ λ HTML, CSS, JSλ§ μ½μ μ μλ€.   
- κ°λ°μλκ΅¬μ consoleμ μ νμ©νλλ‘ νμ
- JSμ CSSλ§μΌλ‘λ λΈλΌμ°μ μ νμ ν  μ μλ€ glueμ­ν μ νλ htmlμ΄ κΌ­ νμνλ€!
- cmdμμ ν΄λ μμ±νλ λͺλ Ήμ΄  
    ```cmd
    "mkdir ν΄λλͺ"
    ```

<br/>
<br/>
<br/>
<br/>


π 2022-3-8
## **π‘ Day2 - (2.1 - 2.6κ°)** 

> JSμ λ³μ, νμ, Array, Objectμ λν΄μ λ°°μ λ€.

    κ²μΌλ₯Έ κ°λ°μκ° λκΈ° μν΄μ λΈλ ₯νμ β λ°λ³΅ μ€μ΄κΈ°!π©βπ»  

- **π± λ³μ**  
π variable, λ³κ²½ κ°λ₯ν μ  

    - ex. 2 + 3 or 2 * 3 κ°μ μ°μ°μ μ«μλ₯Ό λ°κΏμΌ ν  μΌμ΄ μκΈ°λ©΄ λ§€λ² μμ ν΄μΌ λλλ° μ΄ κ²μ λΉ ν¨μ¨μ μ΄λ€!π€
    - μ΄ λ λ³μμ μ«μλ₯Ό μ μ₯νκ³  a + b κ°μ νμμΌλ‘ κ³μ°μ νλ©΄ λ³μλ§ λ°κΎΈλ©΄ λλκΉ μ’μ λ°©λ²μ΄λ€!π€
    - const, letμ ν΅ν΄μ λ³μλ₯Ό μ μΈνλ€.
    - λ³κ²½ κ°λ₯μ± X β const / λ³κ²½ κ°λ₯μ± μλ κ² β let  =>  μ΄κ²λ§ λ΄λ μμ±μμ μλκ° νμκ°λ₯νλ€.
    - JSλ 10μΌλ§μ λ§λ€μ΄μ ν¨μΉκ° λ§μ΄ λμλ€. ν¨μΉ μ μλ varλΌλ κ²μ΄ μ‘΄μ¬νλ€.
    - varλ letκ³Ό constκ°μ κ·μΉμ΄ μμ΄μ μμ±μμ μλλ₯Ό νμνκΈ° μ΄λ ΅κ³ , λ³νμ§ λ§μμΌ ν  λ°μ΄ν°κ° λ³ν  μ μμ΄μ μννλ€.π±
    - **π always const, sometimes let, never var!!! π**   

<br/>

- **π± λ³μμ νμ**  
π number, string, boolean, null, undefinedκ° μ‘΄μ¬νλ€.

    β  number β integer β 2 / float β 2.0 κ° μ‘΄μ¬νλ©° int + float = float μ΄λ€.  
    β‘ string β "" , '' μΌλ‘ ννκ°λ₯νλ©° μ λ€λ₯Ό λμΌν κΈ°νΈλ‘ μ¬μ©ν΄μΌ νλ€.  
    β’ boolean β true | false ("true" μ΄λ κ² μ°λ©΄ μ λλ€, μ»΄ν¨ν°μ 0 = false, 1 = true)  
    β£ null β 'μ‘΄μ¬νμ§ μλλ€'λΌλ μλ―Έ, 'μ λ μμ°μ μΌλ‘ μκΈ°μ§ μμΌλ©° μ°λ¦¬κ° variableμμ μ΄λ€ κ²μ΄ μλ€λ κ²μ νμ€ν νκΈ° μν΄ μ°λ κ²'  
    β€ undefined β μ‘΄μ¬νμ§λ§ μ μλμ§ μμλ€ λΌλ μλ―Έ  

<br/>
   
- **π± Array [ ]**     
π νλμ variableμμ λ°μ΄ν°μ listλ₯Ό κ°μ§κΈ° μν λͺ©μ μΌλ‘ λ§λ€μ΄μ‘λ€.      
    - λΉ ν¨μ¨μ  μμπββοΈ     
        - λ°λ³΅ λλ¬΄ λ§κ³ , μνλ λ³μλ₯Ό μ°ΎκΈ°λ μ΄λ €μ
        ```js
            const tue = "tue";      // not good
            const wed = "wed";
            const thu = "thu";
            const fri = "fri";
            const sat = "sat";
            const sun = "sun";

            const daysOfWeek = " mon + tue + wed + thu + fri + sat + sun";      // not good
        ```   


    - ν¨μ¨μ  μμπββοΈ  
        - Array μ΄μ©νμ¬ data λ΄κΈ° β λ°λ³΅β , μνλ λ°μ΄ν° μ°ΎκΈ° μ¬μ, μΆκ°λ κ°λ₯    
        ```JavaScript
            const daysOfWeek = [ "mon" , "tue" , "wed" , "thu" , "fri" , "sat"];     // good

            const toBuy = ["potato", "tomato", "apple"];

            // Get Item (fri?)
            console.log(daysOfWeek[4]);

            // Push Item
            daysOfWeek.push("sun");
            toBuy.push("kimbab");
        ```
<br/>

- **π± Object { }**    
π μ€λͺμ΄ νμν dataλ€μ λμ΄ν΄μΌ ν  λ μ¬μ©    
    - Objectκ° νμν μμ π
        ```JavaScript
            const playerName = "jm";                // playerλΌλ κ³΅ν΅μ μ΄ μμ
            const palyerPoints = 121212;
            const playerCool = true;
            const playerRich = "little bit";
            const player = ["jm", 1212, true, "little bit"];    // array λ‘λ λͺνν μλ―Έλ₯Ό μ μ μλ€.
        ```        
    - playerλΌλ κ³΅ν΅μ κ³Ό κ°κ°μ μλ―Έλ₯Ό κ°μ΄ ννν΄ μ£Όμ΄μΌ νλ€. β¬

        ```javascript
            // Make object?

            const player = {
                name: 'jm',
                points: 121212,
                cool: true,
                rich: "little bit",
            };

            console.log(player);        // μ μ²΄ object μΆλ ₯
            console.log(player.name);   // objectμ name propertyλ₯Ό μΆλ ₯
            console.log(player["name"]);
        ```
    - player.name μ²λΌ console.logλ₯Ό μ°κ³  μλ€ κ·Έ λ§μ consoleλ κ°μ²΄λΌλ μλ―Έ
    - νμ§λ§ μ΄κ²μ listκ° μλλ€, listλ λͺ¨λ λμΌν κ°μ κ°μ§κΈ° λλ¬Έ
        ```
            ex. ν μ£Όμ μμΌ = [μ ~ μΌ] or μ₯λ³΄κΈ° λ¦¬μ€νΈ = [π, π§, π₯]
            -> μμ λͺ¨λ  λ΄μ©μ΄ μμΌ or μ₯λ³΄κΈ° λ¦¬μ€νΈ μμ μ μ μμ

            νμ§λ§ player{ }λ§ λ³΄λ©΄ μμ λ΄μ©μ΄ λ€ λ€λ¦, κ·Έλ₯ jm, 1212λ§ λ³΄κ³ λ λ­μ§ μ μ μμ
            λ°λΌμ player.name player.points λΌκ³  ν΄μΌ μλ―Έλ₯Ό μ μ μμ.
        ```
    - const objectμΈλ° λ΄μ© μμ  κ°λ₯β
        ```js
            console.log(player.cool);   // true
            player.cool = false;
            console.log(player.cool);   // false
        ```   
        - μ λμ λ΄μ©μ΄ λ€λ¦, constμΈλ° μ κ²°κ³Όκ° λ€λ₯Έκ°?π€
        - const player = objcet μ΄λ€. λ°λΌμ μ μ λ΄μ©μ λ°κΎΈμ΄λ μ¬μ ν playerλ objectμ΄λ€.
        - μ¦, objectμ μμ λ΄μ©μ λ°κΎΈλ κ²μ μκ΄μμ
    -  propertyλ₯Ό μΆκ°ν  μλ μλ€.
        ```js
            player.lastName = "potato";
            console.log(player);  
            
            /* 
               player = {
                   name: 'jm',
                   points: 121212,
                   cool: true,
                   rich: "little bit",
                   lastName: "potato"
               };
             /      
        ```
    - array vs object  
        > μ€λͺμ΄ νμμλ κ² -> array, μ€λͺμ΄ νμν κ²μ -> object

<br/>
<br/>
<br/>
<br/>


π 2022-3-9
## **π‘ Day3 - (2.7 - 2.16κ°)**
> μμμ λ°°μ΄ λ΄μ©λ€μ λ³΅μ΅νκ³ , function(ν¨μ), argument(μΈμ), return(λ°ν κ°), prompt, typeof, μ‘°κ±΄λ¬Έμ λν΄ λ°°μ λ€. 

<br/>
<br/>

- **π± Function**  
π κ³μ λ°λ³΅ν΄μ μ¬μ©ν  μ μλ μ½λ μ‘°κ°, μ΄λ€ μ½λλ₯Ό μΊ‘μνν΄μ μ€νμ μ¬λ¬ λ² ν  μ μκ² ν΄μ€λ€.  

    - function μμ λ πββοΈ
        ```js
            console.log("Hello my name is μ΄λ¦1");      // λΆ νμν λ°λ³΅ λλ¬΄ λ§λ€.
            console.log("Hello my name is μ΄λ¦2");
            console.log("Hello my name is μ΄λ¦3");
            console.log("Hello my name is μ΄λ¦4");
            console.log("Hello my name is μ΄λ¦5");
            console.log("Hello my name is μ΄λ¦6");
        ```   
        
    - function μμ λ πββοΈ
        ```js
            function SayHello () {
                // functionμ΄ μ€ν λ  λλ§λ€ λ°λ³΅ λ  λΆλΆ
                console.log("Hello!");
            };

            SayHello();             // μ¬λ¬ λ² νΈμΆ κ°λ₯
            SayHello();
        ```   

<br/>
<br/>

- π± **Argument**  
π functionμ μ€ννλ λμ μ΄λ€ μ λ³΄λ₯Ό functionμκ² λ³΄λΌ μ μλ λ°©λ²  

    -  function μμμ dataλ₯Ό λ°λ λ°©λ² β β ( ) μμ λ­κ°λ₯Ό μ λ κ².  
         (μ²« λ²μ§Έ μμμ²λΌ console.logλ₯Ό μ¬λ¬λ² μλ ₯νμ§ μμλ argumentλ§ λ°κΏμ κ°νΈνκ² κ°μ λΆλ¬ μ¬ μ μλ€.)
        ```js
            function plus(potato, salad) {      // argumentμ μ΄λ¦ κΌ­ a, bμλμ΄λ κ°λ₯π
                console.log(potato + salad);
            }

            // λ¨, potatoλ functionλ°μμλ μ κ·Όν  μ μλ€.

            plus(5, 10);                    
            plus(1.333, 9898);
            plus(9898, 1.3333);
        ```  

<br/>
<br/>

- π± **Return**  
π returnμ functionμμ κ°μ μ μ₯ ν΄ μ£Όλ μ­ν μ νλ€.  μ΄ κ°μ return valueκ° λλ€.π²  

    - return μμ λ πββοΈ  

        ```js
            // ex) π² κ³μ°κΈ° ν¨μ

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

            calculator.add(3, 4);       // consoleμ κ²°κ³Ό λμ¨λ€, κ°μ΄ μ μ₯λμ§λ μλ μνπ€
            calculator.minus(3, 4);
            calculator.multi(3, 4);
            calculator.div(3, 4);
            calculator.powerof(3, 4);
        ```  
        
    - return μμ λ πββοΈ    

        ```js
            // ex) π² κ³μ°κΈ° ν¨μ

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

            // μ΄ κ²°κ³Όλ€μ μ κΈ°μ μΌλ‘ μ°κ²°λμ΄ μλ€. μ΄κ²μ΄ console.logμ returnμ μ°¨μ΄

            const plusResult = calculator.plus(2, 3);
            const minusResult = calculator.minus(plusResult, 10);
            const timeResult = calculator.time(10, minusResult);
            const divideResult = calculator.divide(timeResult, plusResult);
            const powerResult = calculator.power(divideResult, minusResult);
        ```  
    - functionμ returnμ΄ μμ λ λ³μμ functionμ ν λΉνλ©΄, functionμ returnμ΄ λ³μμ μ μ₯λλ€.
        - μλμ κ²°κ³Όλ₯Ό μ½λλ‘ λ°κ³  μΆλ€λ©΄ β  
        β 'ν¨μλ μ΄λ€ μΌμ μννκ³  κ²°κ³Όλ₯Ό μλ €μ£Όλ κ²μ΄λ€'λΌκ³  μκ°
        ```js
            // ex) π νκ΅­λμ΄ κ³μ°κΈ°

            const age = 96;

            function calculateKrAge(ageOfForeigner) {
                return ageOfForeigner + 2;
            }
            

            const KrAge = calculateKrAge(age);      // returnμ΄ μλ€λ©΄ κ°μ μ μ₯ ν  μ μλ€.

            console.log(KrAge);     // λ§μ½ μμ μ½λμ returnμ΄ μμΌλ©΄ κ²°κ³Όκ° undefinedλ‘ λμ¨λ€.
        ```  
    - π μμ£Ό μ€μν κ°λ β
        - ν λ² returnνλ©΄ functionμ λλλ€.  
        β returnμ νλ©΄ functionμ μλμ λ©μΆκ³ , κ²°κ³Ό κ°μ returnνκ³  λλλ€.
        ```js
            // μμ)

            const calculator = {
                plus: function(a, b) {
                    console.log("hello");       // μ΄ μ½λλ μλ β­
                    return a + b;
                    console.log("hello");       // μ΄ μ½λλ μ λ μλνμ§ β (returnνλ©΄ ν¨μλ λλκΈ° λλ¬Έ!)
                }
            }
        ```   

<br/>
<br/>


- π± **Promptμ μ¬μ©κ³Ό typeof, parseInt**  
π λ§€μ° μ€λ λ JS, μ¬μ©μμ μλ ₯μ λ°λ ν¨μ
    - promtκ° μ€νλ  λλ jsκ° μ μ λ©μΆλ€. μ΄κ²μ λ§€μ° μ€λλ js, μμ¦μ μ μ°μ§ μκ³  customν promtλ₯Ό μ§μ  λ§λλ μΆμΈμ΄λ€.
        ```js
            const age = prompt("How old are you?");

            console.log(age);   // μλ ₯λ°μ ageλ₯Ό νμΈκ°λ₯νλ€.
        ```
    - typeof
        - μ¬μ© μ ( ) μμ κ°μ νμμ μ μ μλ€.  
        ```js
            console.log(typeof "15", typeof (15));  // string, number
        ```   
    - parseInt
        - int νμμΌλ‘ λ³νν΄ μ£Όλ ν¨μ
        ```js
            const age = parseInt(prompt("How old are you?"));       //μ«μκ° μλλ©΄ NaN λμ¨λ€.

            console.log(typeof "15", typeof parseInt("15"));
        ```
    - NaN
        - = μ«μκ° μλλ€ (Not A Number)
        - isNaN( ) β μ΄λ€ κ²μ΄ NaNμΈμ§ νλ³ν  λ μ¬μ©
        - isNaN( )μ true or falseλ₯Ό return νλ€. (boolean)
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


- π± **Conditionals, μ‘°κ±΄λ¬Έ**  
π μ‘°κ±΄μ΄ μ¬λ¬κ°μ§ μΌ λ, ifμ else if, else μ΄μ©ν΄μ μ‘°κ±΄λ¬Έ μ¬μ©  
    - μ‘°κ±΄ ν κ°μ§μ© μμ λ
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
    - λ κ°μ§ μ΄μμ μ‘°κ±΄μ λμμ λ§μ‘±ν΄μΌ ν  λ
        - AND π &&   β λ λ€ λ§μ‘±
        - OR  π  ||  β λ μ€μ νλλ§ λ§μ‘±  

        ```js
            if (isNaN(age) || age < 0) {    // μ¬μ©μκ° -μλ₯Ό μλ ₯ν  λ μκ³  μΆλ€.
                console.log("Please write a real positive number");
            }else if (age< 18){
                console.log("You are too young");
            }else if(age >= 18 && age <=50) {
                console.log("You can drink");
            }else if (age > 50 && age <= 80) {
                console.log("You should exercise");
                // π μ΄ μ½λκ° λ§¨ λμ μμΌλ©΄ μμ μ‘°κ±΄μ΄ λ μμκΈ° λλ¬Έμ μ€νλμ§ μλλ€.
            }else if (age === 100) {                            
                console.log("Wow you are wise")
            }else if (age >80) {
                console.log("You can do whatever you want.")
            }
        ```
    - =μ ===μ !==
        - = : κ° μ ν λΉ
        - === : κ°, νμμ΄ κ°λ€
        - !== : κ°, νμμ΄ λ€λ₯΄λ€

<br/>
<br/>
<br/>
<br/>


π 2022-3-10
## **π‘ Day4 - (3.0 - 3.5κ°)** 

> λ³Έκ²©μ μΌλ‘ HTMLκ³Ό JSλ₯Ό μ°κ²°νλ λ°©λ²μ λν΄μ λ°°μ°κ³ , JSμμ HTMLμ μ‘°μνλ λ°©λ²μ λν΄μ λ°°μ λ€.π  

<br/>
<br/>


- π± **JS μ¬μ©νλ μ΄μ  β**  
π HTMLκ³Ό μνΈμμ© νκΈ° μν΄μ
    - JSλ HTMLμ elementλ€μ μμ μ λ°©μμΌλ‘ μ‘°μκ°λ₯νλ€.
    - JSλ‘ HTMLμ μ‘°μνλ©΄ μλ HTMLνμΌμ μν₯μ μ£Όμ§ μκ³  λλ¦½μ μΌλ‘ μ‘°μν  μ μλ€.

<br/>
<br/>


- π± **Documentλ Object β**  
π documentλ λΈλΌμ°μ μ μ΄λ―Έ μ‘΄μ¬νλ Object
    - μ½μ μ°½μ documentλ₯Ό μλ ₯νλ©΄ κΈ΄ objectμμ μ μ μλ€.  
    - htmlμ JSμ ννλ‘ λ³Ό μ μλ€. = JSμμ HTML document Objectλ‘ λΆν° λ€μν propertyλ₯Ό κ°μ Έμ¬ μ μλ€π
    - documentμμλ λ§€μ° λ€μν propertyκ° μ‘΄μ¬νλ€. (ex. location, title, className ...)  

        ```
        μλ Objectμμλ propertyλ₯Ό κ°μ§κ³  μ¬ μ λ μκ³ , μμ λ κ°λ₯νλ€.π€
        
        π documentλ Object, μ¦, documentλ μμ propertyλ₯Ό μ‘°μν  μ μλ€.π²
            
            π₯ μ΄κ²μ λ§€μ° μ€μν ν¬μΈνΈ! π₯
        ```

<br/>
<br/>


- π± **JSμμ HTML μ‘°μνκΈ° β**  
π HTMLμ λ³κ²½νμ§ μκ³  JSμμ μ‘°μνλ λ°©λ²
    - HTMLμμ μ‘°μνλ €λ κ³³μ id, class λ±μ μ€μ νλ€.
    - JSμμ documentλ₯Ό ν΅ν΄ ν­λͺ©λ€μ κ°μ Έμ¨λ€.
    - document ν­λͺ©λ€μ λ³κ²½νλ€.
    - β propertyλ₯Ό κ°μ Έμ€λ λνμ μΈ λ°©λ² (ν¨μ)
        ```
        λ¨, HTMLκ³Ό JSμμ λμΌνκ² νκΈ°λμ΄ μλ μμλ§ κ°μ Έμ¬ μ μλ€ π₯
        ```
        - getElementById( ) : idκ° λμΌν ν­λͺ© μ€ μ²«λ² μ§Έ μμλ₯Ό κ°μ Έμ¨λ€.
        - getElementByCalssName( ) : classκ° λμΌν ν­λͺ©μ κ°μ Έμ¨λ€.
        - querySelector( ) : κ΄νΈ μμ μμμ λμΌν κ²μ κ°μ Έμ¨λ€. elementλ₯Ό CSSλ°©μμΌλ‘ κ²μ ν  μ μλ€.π     
          (ex. .title, #title, .hello h1)
        - querySelectorAll( ) : κ΄νΈ μμ μμμ λμΌν κ²μ λͺ¨λ κ°μ Έμ¨λ€.  

        <br/>
    - μμμ½λ

        ```js
            const title = document.getElementById("title");     // titleμ΄λΌλ idμ ν­λͺ©μ κ°μ Έμ¨λ€.

            title.innerHTML = "Got you";        // title ν­λͺ©μ λ΄λΆ λ΄μ©μ λ³κ²½
        ```   
        ```js
            getElementByClassName(), getElementsByTagName(), getElementsByName() π [] λ₯Ό λ°ν!

            querySelector() π μ²« λ²μ§Έ μμ νλλ§ λ°ν!, μ£Όλ‘ μ¬μ©νλ ν¨μ

            const title = document.querySelector(".hello");
            const title = document.querySelector(".hello:first-child h1");  // μ΄λ° κ²λ κ°λ₯
            
        ```
    
<br/>
<br/>


- π± **Events**  
π documentμ ν¨μμΈ eventλ€μ μ΄μ©νμ¬ JSλ‘ HTMLμ μ‘°μν  μ μλ€.
    - π documentλ HTMLμ΄ app.jsλ₯Ό loadνκΈ° λλ¬Έμ μ‘΄μ¬νλ κ²μ΄λ€!
    - λ§μ½ elementμ λ΄λΆκ° κΆκΈνλ€λ©΄ β console.dir( )μ μ΄μ©νλ©΄ λλ€.  
    objectλ‘ νμλ elementλ₯Ό λ³΄μ¬μ€λ€.
        ```js
            console.dir(title);
            π
            // μ½μμμ λ³Ό μ μλ κ²

            ex. onfocus, onclick, onmouseenter, onmouseleave ...
        ```
    - objectμμ λ΄μ©μ λ°κΏ μ μμ§λ§, μ λΆ λ€ λ°κΏ μ μλ κ²μ μλλ€.   
    - μ°λ¦¬κ° listenνκ³  μΆμ eventλ₯Ό μ°Ύλ κ°μ₯ μ’μ λ°©λ²
        - π λ°©λ²1 ) κ΅¬κΈμ μ°Ύκ³  μΆμ elementμ μ΄λ¦ + mdn μ΄λΌκ³  κ²μ π   
                     ex) h1 html element mdn  
                     κ·Έ μ€μ Web APIsλΌλ λ¬Έμ₯μ΄ ν¬ν¨λ νμ΄μ§ μ°ΎκΈ°!  
        - π λ°©λ² 2 )  console.dir(h1)ν΄μ on~ μΌλ‘ μμνλ propertyμΈ evnetλ₯Ό κ΄μ°° κ°λ₯  
    - λνμ  μ’λ₯
        - click, mouseenter, μλ ₯μ λλ΄κ±°λ, ν€λ³΄λ ν€λλ₯Ό λ, wifi μ μ ν΄μ λ  λ ... 

        ```js
            // styleλ³κ²½ μμ
            title.style.color = "blue";         // μ΄λ°μμΌλ‘ μ¬μ©
        ```     
    - Event λ±λ‘νλ λ°©λ²
        ```js
            title.addEventListener("λμ");

            function handleTitleClick() {
            console.log("title was clicked!");
            title.style.color = "green";
            }

            title.addEventListener("click", handleTitleClick);      // ν¨μλ₯Ό 2λ² μ§Έ μΈμλ‘ μ λ¬
        ```  
    -  π μμ μ½λμμ functionμ μ€ννμ§ μκ² νλ κ²μ΄ λ§€μ° μ€μ!! 
        - (function( ) μ΄λ κ² μ°λ©΄ μ λ¨πββοΈ)
        ```js
            // ν¨μ νΈμΆ? 
            π  function( )

            νμ§λ§ addEventListenrμμλ ( )λ‘ νΈμΆνμ§ μλλ€.

            π€·ββοΈβ μ κ·Έλ κΉ? β μμλ₯Ό 'ν΄λ¦­' ν  λ JSκ° ν¨μλ₯Ό νΈμΆνκ² λ§λ€κ³  μΆμ κ²μ΄μ§,  
             νμμ νΈμΆνλ €λ κ²μ΄ μλλ€.

            h1.addEventListener("mouseleave", handleMouseLeave); 
            /*
            μ¦, μ΄ μ½λμ μλ―Έλ
            λκ΅°κ° h1μ ν΄λ¦­νλ©΄ handleMouseLeave ν¨μλ₯Ό μ€νν΄! 
            λΌκ³  JSμκ² μλ €μ£Όλ κ² 
            */
        ```  
    - JSλ‘ styleμ λ³κ²½ν  μ λ μμ§λ§ , μ΄λ‘ μ μΌλ‘λ cssμμ νλ κ²μ΄ λ§λ€β  
    
<br/>
<br/>


- π± **Event μ¬μ©λ°©λ²**  
π eventλ₯Ό μ¬μ©νλ λ°©λ²μ λν΄μ μμλ³΄μ!
    - π μ²« λ²μ§Έ λ°©μ
        - λμ€μ removeEventListerλ‘ μ΄λ²€νΈ μ­μ λ κ°λ₯
        ```js
            // target.addEventLister("μ΄λ²€νΈ", μ΄λ²€νΈ ν¨μλͺ)
            title.addEventListener("mouseleave", handleMouseLeave);
        ```  
    - π λ λ²μ§Έ λ°©μ
        ```js
            // target.onμ΄λ²€νΈ = μ΄λ²€νΈ ν¨μλͺ
            title.onclick = handleMouseLeave;
        ```
    - [π Web APIs νμΈν  μ μλ μ£Όμ](https://developer.mozilla.org/ko/docs/Web/API/Window)
    - documentμμ μ μνμ§ μμλ λ°λ‘ κ°μ Έμ¬ μ μλ μμ
        - body, head, title(μλ μ‘΄μ¬νλ title μ λͺ© λΆλΆ)
        ```js
             // μμ
            function handleWindowResize() {
                document.body.style.backgroundColor = "tomato"
            }

            window.addEventListener("resize", handleWindowResize);
        ```  
    - clipboardμ κ΄ν event
        - copy, cut, paste
        ```js
            function handleCopy() {
                alert("Copier!")
            }

            window.addEventListener("copy", handleCopy);

        ```  
    - wifiμ κ΄ν event
        - offline, online
        ```js
            function handleOffline() {
                alert("π± SOS No wifi!")
            }

            function handleOnline() {
                alert("π Are goooood!")
            }

            window.addEventListener("offline", handleOffline);
            window.addEventListener("online", handleOnline);
        ```

<br/>
<br/>
<br/>
<br/>


π 2022-3-11
## **π‘ Day5 - (3.6 - 3.8κ°)** 

> JSν΅ν΄ CSSλ₯Ό μ‘°μνλ μ¬λ¬κ°μ§ λ°©λ²μ λ°°μ λ€.π 

<br/>
<br/>


> π± **CSS in Javascript 1οΈβ£**  

π JSμμμ styleλ‘ CSSμ μ κ·Όνμ¬ μ‘°μνλ λ°©λ²
- μμ  μ½λ
```js
    const h1 = document.querySelector("div.hello:first-child h1");
    
    function handleTitleClick() {           

        // getter - κ°μ κ°μ Έμ΄
        console.log(h1.style.color);
        
        // setter - κ°μ μ€μ ν¨
        h1.style.color = "cornflowerblue";
        
        console.log(h1.style.color);
    }

     // consoleκ²°κ³Ό : μ²μμ λΉμΉΈμΌλ‘ λμ€κ³ , κ·Έ λ€μλΆν°λ blueλ‘ λμ¨λ€.ππ»ββοΈ
```
- λͺ©ν β
    - κΈμλ₯Ό λλ₯΄λ©΄ π΅, νλ² λ λλ₯΄λ©΄ π μμΌλ‘ λ³νκ²
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
- μ‘°κΈ λ λ°μ  λ λ²μ  (λ³μμ κ° μ μ₯νκΈ°)
```js
    function handleTitleClick() {           
        const currentColor = h1.style.color;
        let newColor;   // new colorλ μλ¬΄κ²λ μλ λΉμ΄μλ λ³μ
        
        if(currentColor === "cornflowerblue") {
            newColor = "tomato";
        }else {
            newColor = "cornflowerblue";
        }
        h1.style.color = newColor;  
        
        π

        /** 
             π μ‘°κ±΄λ¬ΈκΉμ§λ§ μ€ννλ©΄ μ°λ¦¬ h1μκ²λ μλ¬΄μΌλ μΌμ΄λμ§ μλλ€. 
            λ°λΌμ κ°μ ν λΉν΄μ£Όμ΄μΌ νλ€.
        */ 
    }


    h1.addEventListener("click", handleTitleClick);
```

<br/>
<br/>


> π± **CSS in Javascript 2οΈβ£**  

π elementμμ className λ³κ²½, μ κ±°, μΆκ° νλ λ°©λ²(λ§€μ° μΆμ²λλ λ°©λ²μ β)
- μμμ½λ - ν΄λ¦­ μ κΈμμμ λ³κ²½
```css
    /* CSSμ½λ */

    h1 {
    color: cornflowerblue;
    }

    .active {
        color: tomato;
    }
```
```js
    // JSμ½λ
    const h1 = document.querySelector("div.hello:first-child h1");

    function handleTitleClick() { 
    h1.className = "active";
    }

    h1.addEventListener("click", handleTitleClick);
    // κ²°κ³Ό : ν΄λ¦­ β κΈμμμ΄ π΅ β π 
```
- λͺ©ν β β ν΄λ¦­νλ©΄ π΅ β π  λκ³ , λ€μ ν΄λ¦­νλ©΄ π  β π΅ λλλ‘!
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
    κ²°κ³Ό : λͺ©νλλ‘ λμν¨, 
    butβ activeλΌλ string λ°λ³΅μ¬μ© => errorμ μμ§π±    
    */ 
```
- π₯ κ°μ λ λ²μ  ππ»ββοΈ - μ‘°κ±΄λ¬Έ μ¬μ© β Classλ₯Ό λ³μλ‘ μ μ©
```js
    function handleTitleClick() {

        const clickedClass = "clicked"  
        /** μ΄λ κ² λ³κ²½! π ν λ²λ§ λ³΅λΆνλ©΄ λμ errorκ°λ₯μ± β, 
         λν λ³μλ₯Ό μλͺ»μ°λ©΄ consoleμμ μλ €μ£Όκ² λ¨ :  μ€μ νλ₯  β
        */ 

        if( h1.className === clickedClass) {
            h1.className="";
        }else {
            h1.className = clickedClass;
        }
    }
```
- ClassNameμ λ¬Έμ μ  β π±
    - λ§μ½ elementμ μ΄λ―Έ classκ° μ‘΄μ¬ν  κ²½μ°   
      β event μ€ννμλ κΈ°μ‘΄μ classκ° μ¬λΌμ Έλ²λ¦°λ€.
```html
    <div><h1 class="sexy-font">Click me!</h1></div>
    <!-- μ¬κΈ°μ ν΄λ¦­ μ classNameμ΄ "cliked"κ° λλ μ½λλ₯Ό μ€ννλ©΄ -->
    π
    <div><h1 class="clicked">Click me!</h1></div>
    <!-- μ΄λ κ² λμ΄λ²λ¦°λ€π₯ β λ€λ₯Έ λ°©λ² νμν¨β-->
```

<br/>
<br/>


> π± **CSS in Javascript 3οΈβ£**  

π Class μ μ²΄λ₯Ό κ΅μ²΄νλ κ²μ΄ μλ μλ μνμ μΆκ°νλ λ°©λ² 
- β¨**ClassList**β¨
    - elementμ classsλ΄μ©λ¬Όμ μ‘°μνλ κ²μ νμ©πββοΈ
    - 'contains' μΈ μ μλ€ β classκ° ν¬ν¨λμ΄ μλμ§ νμΈ
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
        μ΄μ  font classλ κ·Έλλ‘ μ μ©λ μνμμ
        "clicked" classλ μ μ©κ°λ₯νλ€.
    */
```
- μ΅μ’ Upgrade λ²μ  π β **toggle** μ¬μ©
    - ν ν°μ **toggle** νλ€ : ν ν°μ΄ μμΌλ©΄ μ κ±°, μμΌλ©΄ μΆκ°  
      ex. λΆ λκΈ° - μΌκΈ°, μ€λ§νΈν° Lock - Unlock
```js
    function handleTitleClick() {
        h1.classList.toggle("clicked");
    }

    // λ§€μ° κ°λ¨νκ² λμΌν κΈ°λ₯ μ€νκ°λ₯π
```
- λ¬Όλ₯Έ toggleμ λ¨Όμ  λ°°μλ μ’μκ² μ§λ§, μμ κΈ°λ₯μ μμμΌ toggleμ νΈλ¦¬ν¨μ κ°λ ¬νκ² λλ μ μλ€.π€
<br/>
<br/>
<br/>
<br/>

π 2022-3-11
## **π‘ Day6 - (4.0 - 4.3κ°)** 

> Formμ΄ μ μΆλλ μ΄λ²€νΈκ° λ°μλ  λ μΌμ΄λλ μΌκ³Ό, λΈλΌμ°μ μ κΈ°λ³Έλμμ λ§λ λ°©λ², locaslStorageμ κ° μ μ₯νλ λ°©λ²μ λν΄μ λ°°μ λ€.

<br/>
<br/>


> π± **Input values**  

π 