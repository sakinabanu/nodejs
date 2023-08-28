import readline from "readline-sync";
import cli from "cli-color";
import axios from "axios";


async function getweather(){
    let APIkey = readline.question("Enter the API key : ");
    let cityname = readline.question("Enter the city name : ");
    let color = cli.xterm(54);
    let color1 = cli.xterm(18);
    let color2 = cli.xterm(30);
    let color3 = cli.xterm(127);
    let color4 = cli.xterm(38);
    let color5 = cli.xterm(215);
    let color6 = cli.xterm(229);
    let color7 = cli.xterm(124);
    let color8 = cli.xterm(146);
    let color9 = cli.xterm(190);
    let color10 = cli.xterm(98);
    let color11 = cli.xterm(73);
    let color12 = cli.xterm(95);
    let color13 = cli.xterm(126);
    let color14 = cli.xterm(223);
    let color15 = cli.xterm(131);
    let color16 = cli.xterm(151);
    let color17 = cli.xterm(175);
    let color18 = cli.xterm(214);
    let color19 = cli.xterm(160)

    
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

    console.log(newdata);
    console.log(color(`************************ WEATHER REPORT ************************`));
    console.log(color1("coord : {"));
    console.log(color2("    longitude :", newdata.coord.longitude));
    console.log(color3("    latitude :", newdata.coord.latitude));
    console.log(color1("}"));
    console.log(color4("weather : {", newdata.weather));
    console.log(color5("    description :", newdata.weather.description ,"}"));
    console.log(color4("}"));
    console.log(color6("main : {" ));
    console.log(color7( "   temp : {" ));
    console.log(color8("        temp_in_kelvin :", newdata.main.temp.temp_in_kelvin));
    console.log(color9("        temp_in_Fahrenheit :", newdata.main.temp.temp_in_Fahrenheit));
    console.log(color10("       temp_in_Celsius :", newdata.main.temp.temp_in_Celsius));
    console.log(color7("    }"));
    console.log(color11("   pressure :", newdata.main.pressure));
    console.log(color12("   humidity :", newdata.main.humidity));
    console.log(color6("}"));
    console.log(color13("wind : {"));
    console.log(color14("   speed :", newdata.wind.speed));
    console.log(color13("}"));
    console.log(color15("sys : {"));
    console.log(color16("   country :", newdata.sys.country));
    console.log(color15("}"));
    console.log(color17("id :", newdata.id));
    console.log(color18("name :", newdata.name));
}
catch(error){
    console.log(color19(`THE GIVEN CITY "${cityname}" OR THE KEY "${APIkey}" IS WRONG!!`));
}
}
getweather();