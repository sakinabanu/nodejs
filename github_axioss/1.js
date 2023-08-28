import readline from "readline-sync";
import axios from "axios";
import cli from "cli-color";

async function getweatherData(){
    try{
        
        let c1=cli.xterm(196)
        let c2=cli.xterm(119)
        let c3=cli.xterm(226)
        let c4=cli.xterm(128)
        let c5=cli.xterm(123)
        let c6=cli.xterm(214)
        
    console.log("*******************WELCOME TO WEATHER REPORT*********************");
    let input =readline.question(c5("Enter your city name: "));
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=ffbdab20fe058ed42a46ad54a094d943`;


    
    let output=await axios.get(url) 
    let temperature=output.data.main.temp;
    let celsius=`${Math.floor(temperature-273.15)}°C`;
    let Fahrenheit=`${Math.floor(1.8*(temperature-273) + 32)}°F`;

    console.log(c1("Id:",output.data.id));
    console.log(c2("Country:",output.data.sys.country));
    console.log(c3("City Name:",output.data.name));
    console.log(c5("Longitude:",output.data.coord.lon));
    console.log(c4("Latitude:",output.data.coord.lat));
    console.log(c1("Description:",output.data.weather[0].description));
    console.log(c2("Celsius:",celsius));
    console.log(c6("Fahrenheit:",Fahrenheit));

    }catch(error){
        console.log("Wrong city name Check first letter should be capital");
        
    }
           
}
getweatherData()