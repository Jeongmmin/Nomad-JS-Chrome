π 2022-3-19
## **π‘ Day11 - (8.0 - 8.2κ°)** 

> πμ¬μ©μμ μμΉ μ λ³΄μ βν΄λΉ μμΉμ λ μ¨ νμνκΈ° 

<br/>
<br/>

> π± **userμ μλ(latitude) , κ²½λ(longitude) κ΅¬νκΈ°**  

π  navigator ν¨μλ₯Ό μ΄μ©ν΄ μ¬μ©μμ μμΉλ₯Ό μμλ΄λ μ½λ μμ±
- [mdn λ§ν¬](https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition)
- JavaScriptκ° positionμ ν΅ν΄μ userμ μμΉλ₯Ό μ λ¬ν΄μ€.
- positionμ objectμ΄κ³ , μλ, κ²½λ κ°μ΄ ν¬ν¨λμ΄ μλ€. 
- position( )ν¨μλ 2κ°μ μΈμκ° νμνλ€.
	- μ μμ μΌλ‘ μ€νλμ λμ ν¨μ (onGeoOk)
    - μ€ν μ€ν¨νμ λμ ν¨μ (onGeoError)
```js
  navigator.geolocation.getCurrentPosition(μ€νβ­ν¨μ, μ€νβν¨μ)
```
- μ€ν ππ»ββοΈν¨μ (onGeoOk), μ€νππ»ββοΈ ν¨μ (onGeoError)λ‘ μ€μ 
- μμ μ½λ
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

> π± **OpenweatherApi μ¬μ©μ€λΉ**  

π OpenweatherApiμ΄μ©ν΄μ userμ νμ¬ μμΉ, λ μ¨ Data λ°μμ€λλ‘ μ€λΉνκΈ°
- https://openweathermap.org
- νμκ°μ ν κ°μΈ Api key λ°κΈλ°κΈ°
- https://openweathermap.org/api
- λ‘κ·ΈμΈ ν api doc λͺ©λ‘μΌλ‘ μ΄λ
- current Weather Data apiλ₯Ό μ¬μ©νμ¬ μμΉ, λ μ¨, μ¨λ Data λ°μ μ¬ μ μλ€.
- π‘ Tip!
	-  JSON λ°μ΄ν°λ₯Ό νΈνκ² λ³Ό μ μλ λ°©λ²
    - ν¬λ‘¬ νμ₯ νλ‘κ·Έλ¨ [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=ko) μ€μΉ
![](https://velog.velcdn.com/images/jmindev/post/0e373212-04d3-42c3-a14a-8af15a553578/image.png)


<br/>    
<br/>
<br/>

> π± **OpenweatherApi μ¬μ©νκΈ°**  

π userμ νμ¬ μμΉ, λ μ¨ Data λ°μμ€κΈ°
```
  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

- μ΄ μ£Όμμ μμμ κ΅¬ν lat, lon, api keyλ₯Ό λ£μ ν ν¬λ‘¬ μ£Όμμ°½μ κ²μν΄λ³Έ λ€ κ°μ΄ μ λμ¨λ€λ©΄ λ€μ κ³Όμ μ μ§νν  μ μλ€.
- μ΄μ  urlμμ νμν κ°μ getν΄λ³Ό κ²μ΄λ€.
	- λ§ν¬λ₯Ό ν΄λ¦­νλ©΄ λΈλΌμ°μ κ° μ£Όμλ‘ μ΄λν΄μ μλ΅νμ¬ κ°μ λ³΄μ¬μ€λ€. 
    - javaScriptλ λ§ν¬λ₯Ό λλ₯΄λ λμ  fetchλ₯Ό μ¬μ©ν΄μ urlμ call ν΄μ€λ€.
- μ»κ³ μνλ λ°μ΄ν°
	- μ°λ¦¬κ° μλ μ₯μμ μ΄λ¦ (μμΈ, λΆμ°...)
	- μ₯μμ λ μ¨ (λ§μ, νλ¦, λΉ...)
    - κΈ°μ¨ (μ§κΈμ νμ¨μ¨λλ‘ λμ΄μλλ°, μ­μ¨μ¨λλ‘ λ°κΎΈκΈ° μν΄μ api docμ μ΄ν΄λ³Ό νμκ° μλ€.)
- νμ¨(Fahrenheit) β μ­μ¨(Celsius) λ³νλ°©λ²
	- unitsμ μ¬μ©νλ©΄ λλ€.
	- κ°κ°imperial(νμ¨), metric(μ­μ¨), standard(μ λμ¨λ)λ₯Ό μλ―Έ
    - url λμ &units=metricμ λΆμ΄λ©΄ μ­μ¨μ¨λκ° ν¬ν¨λ κ²°κ³Όλ₯Ό μ»μ μ μλ€.
```js
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
```
- fetchκ° μΌμ΄λλ κ²μ κ°λ¨νμ§ μμ κ³Όμ μ΄λ€.
	- fetchλ promiseμ΄λ€.
    - promiseλ λΉμ₯ λ­κ° μΌμ΄λμ§ μκ³  μκ°μ΄ μ’ μ§λ λ€μ μΌμ΄λλ κ²μ΄λ€.
    - κΈ°λ€λ Έλ€κ° λ΄μ© μΆμΆ => Data μ»κΈ° μμλ‘ μ΄λ£¨μ΄μ Έμλ€.
    - μλμ ννλ‘ μ¬μ©
```js
  fetch(url).then(reponse => response.json()).then(data => {
     // κΈ°λ€λ¦° ν μ€ννλ €λ μ½λ μλ ₯νλ κ³³
  })

  // μμ)
  fetch(url).then(reponse => response.json()).then(data => {
    console.log(data.name, data.weather[0].main)
  })
```



<br/>    
<br/>
<br/>

 
> π± **Userμ μμΉ, λ μ¨, κΈ°μ¨ μ»λ λ°©λ²**  

π  μ μ²΄ μ½λ μ΄ν΄λ³΄κΈ°
- json dataλ₯Ό ν΅ν΄ μ»μ μ μλ Data
	- μμΉ : data.name
  - λ μ¨ : data.weather[0].main
  - μ­μ¨κΈ°μ¨ : data.main.temp
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
  const API_KEY = "κ°μνλ©΄μ λ°μ api key";


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

[π λͺ©λ‘μΌλ‘](/README.md)
