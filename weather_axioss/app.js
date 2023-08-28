import readline from "readline-sync";
import cli from "cli-color";
import axios from "axios";


async function getweather(){
    let APIkey = readline.question("Enter the API key : ");
    let cityname = readline.question("Enter the city name : ");
    let color = cli.xterm(161);
    let color1 = cli.xterm(4);
    let color2 = cli.xterm(228);
    let color3 = cli.xterm(55);
    let color4 = cli.xterm(64);
    let color5 = cli.xterm(87);
    let color6 = cli.xterm(204);
    let color7 = cli.xterm(103);
    let color8 = cli.xterm(109);
    let color9 = cli.xterm(138);
    let color10 = cli.xterm(89);
    let color11 = cli.xterm(214);
    let color12 = cli.xterm(30);
    let color13 = cli.xterm(208);
    
 
    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;
    let report = await axios.get(url);
    let tem = report.data.main.temp
    let newdata = {
        "coord":{
        "longitude": `${report.data.coord.lon}`,
        "latitude": `${report.data.coord.lat}`
        },
        "weather":{
        "description": `${report.data.weather[0].description}`
        },
        "main":{
            "temp" :{
                "temp_in_kelvin": `${report.data.main.temp}`,
                "temp_in_Fahrenheit": `${(tem-273.15)*(9/5)+32}°F`,
                "temp_in_Celsius": `${tem- 273.15}°C`
            },
            "pressure": `${report.data.main.pressure}`,
            "humidity": `${report.data.main.humidity}`
        },
        "wind": {
            "speed": `${report.data.wind.speed}`
        },
        "sys": {
            "country": `${report.data.sys.country}`
        },
        "id": `${report.data.id}`,
        "name": `${report.data.name}`
    
    }
    console.log(color(`************************** WEATHER REPORT **************************`));
    console.log(newdata);
    console.log(color1(newdata.coord.longitude));
    console.log(color2(newdata.coord.latitude));
    console.log(color3(newdata.weather.description));
    console.log(color4(newdata.main.temp.temp_in_kelvin));
    console.log(color5(newdata.main.temp.temp_in_Fahrenheit));
    console.log(color6(newdata.main.temp.temp_in_Celsius));
    console.log(color7(newdata.main.pressure));
    console.log(color8(newdata.main.humidity));
    console.log(color9(newdata.wind.speed));
    console.log(color10(newdata.sys.country));
    console.log(color11(newdata.id));
    console.log(color12(newdata.name));
    }
    catch(error){
        console.log(color13(`THE GIVEN KEY "${APIkey}" OR THE CITY "${cityname}" DOESN'T EXIST!!`));
    }  
}
getweather();