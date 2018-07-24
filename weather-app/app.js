const yargs = require("yargs");

<<<<<<< HEAD
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");
=======
const geocode = require("./geocode/geocode")
>>>>>>> f4ca0b683bb9a38ac4300106d53a321892aa36a0

const argv = yargs
    .options({
        a: {
<<<<<<< HEAD
            alias: "address",
            describe: "Address to fetch weather for",
            string: true
        }, 
=======
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for",
            string: true
        }  
>>>>>>> f4ca0b683bb9a38ac4300106d53a321892aa36a0
})
.help()
.alias("help", "h")
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    }
    else{
<<<<<<< HEAD
        console.log(JSON.stringify(results.address, undefined, 2));

        weather.getWeather(results.latitude, results.longitude, (errorMessage, wresults) => {
            if (errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(JSON.stringify(`Its currently ${wresults.temperature}`, undefined, 2));
            }
        });

    }
});



=======
        console.log(JSON.stringify(results, undefined, 2));
    }
});

>>>>>>> f4ca0b683bb9a38ac4300106d53a321892aa36a0
