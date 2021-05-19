const submitBtn = document.getElementById('submitBtn');
const city = document.getElementById('city');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const tempr = document.getElementById('tempr');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault(); 
    let cityVal = city.value;
    if(cityVal === ""){
        city_name.innerText = `Please enter city name`;
        data_hide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=58dea1701879974438c6bcf1c872927d`;
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            tempr.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            data_hide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `Please enter proper city name`;
            data_hide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);