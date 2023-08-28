import readline from "readline-sync";
import cli from "cli-color";
import axios from "axios";


async function getData(){
   
    let color = cli.xterm(202);
    let color1 = cli.xterm(5);
    let color2 = cli.xterm(19);
    let color3 = cli.xterm(37);
    let color4 = cli.xterm(53);
    let color5 = cli.xterm(96);
    let color6 = cli.xterm(126);
    let color7 = cli.xterm(146);
    let color8 = cli.xterm(174);
    let color9 = cli.xterm(217);
    let color10 = cli.xterm(224);
    let color11 = cli.xterm(229);
    let color12 = cli.xterm(210);

    let userid = readline.question("Enter the userid : ");
    try{
    let url = `http://api.github.com/users/${userid}`;
    let result = await axios.get(url);
    let newdata = {
        "login": `${result.data.login}`,
        "id": `${result.data.id}`,
        "name": `${result.data.name}`,
        "company": `${result.data.company}`,
        "location": `${result.data.location}`,
        "bio": `${result.data.bio}`,
        "twitter_username": `${result.data.twitter_username}`,
        "public_repos": `${result.data.public_repos}`,
        "public_gists": `${result.data.public_gists}`,
        "followers": `${result.data.followers}`,
        "following": `${result.data.following}`
    }
    
    console.log(newdata);
    console.log(color(`************************ WELCOME TO GITHUB ************************`));
    console.log(color1("login :", newdata.login));
    console.log(color2("id :", newdata.id));
    console.log(color3("name :", newdata.name));
    console.log(color4("company:", newdata.company));
    console.log(color5("location:", newdata.location));
    console.log(color6("bio :", newdata.bio));
    console.log(color7("twitter_username :", newdata.twitter_username));
    console.log(color8("public_repos :", newdata.public_repos));
    console.log(color9("public_gists :", newdata.public_gists));
    console.log(color10("followers :", newdata.followers));
    console.log(color11("following :", newdata.following));
    }
    catch (error){
        console.log(color12(`THE ID "${userid}" DOESN'T EXIST!`));
    }
}
getData();
