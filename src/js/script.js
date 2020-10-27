fetch('http://api.openweathermap.org/data/2.5/weather?id=756135&appid=5db9e7d891dea2853ba969dfb07029a6')

    .then(function (resp) {return resp.json()})
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = 
        Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]
        ['description'];
        //http://openweathermap.org/img/wn/04d@2x.png
        document.querySelector('.features li').innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    }) 
    .catch(function () {

    });