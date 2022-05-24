class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "English", "Hello world!", ["red", "white", "blue"]);
let botswana = new Country("Botswana", "Tswana", "Dumela moo!", ["lightblue", "black", "white"]);
let denmark = new Country("Denmark", "Danish", "Hej verden!", ["red", "white"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let somalia = new Country("Somalia", "Somali", "Haye aduunyo!", ["lightblue", "white"])


function SwitchCountry() {
    
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        country = usa;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else if (input === "Botswana") {
        country = botswana;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else if (input === "Denmark") {
        country = denmark;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[1];
    }
    else if(input === "Mexico") {
        country = mexico;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else if(input ==="Somalia") {
        country = somalia;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[0];
        document.getElementById("Color3").style.backgroundColor = country.colors[1];
    }

}
