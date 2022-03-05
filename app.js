const API_KEY = "b59681f1076da1dd527e3041243400e5";
const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => dispayTemperature(data));
}
const setData = (id, data) => {
    document.getElementById(id).innerText = data;
}
const dispayTemperature = data => {
    console.log(data);

    setData('city-result', data.name);
    setData('temp-result', data.main.temp);
    setData('temp-result', data.main.temp);
    setData('weather', data.weather[0].main);

    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const icon = document.getElementById('icon');
    icon.setAttribute('src', iconUrl);
}