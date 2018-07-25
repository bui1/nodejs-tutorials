// USD, CAD, 20
// 20 USD is worth 26 CAD. You can spend these in the following countries: Canada

// http://data.fixer.io/api/latest?access_key=d32d75de5146611ae7f23de0782ac09b

const axios = require('axios');

const getExchangeRate = async (from, to) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=d32d75de5146611ae7f23de0782ac09b');
  const euro = 1 / response.data.rates[from];
  const rate = euro * response.data.rates[to];
  return rate;
};

const getCountries = async (currencyCode) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`); /// wait until promise settles before returning it
  return response.data.map((country) => country.name);
};

const convertCurrency = (from, to, amount) => {
    return getExchangeRate(from, to).then((rate) => {
        const convertedAmount = (amount * rate).toFixed(2);
        console.log(convertedAmount);
    }).then((countries) => {
        return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in ${countries}`;
    });
};

const convertCurrencyAlt = async (from, to, amount) => {
    try{
        const rate = await getExchangeRate(from,to);
    }
    catch(err){
        console.log(err);
    }
    
    const countries = await getCountries(to);

    const convertedAmount = (amount * rate).toFixed(2);

    return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in ${countries}`;

};

getExchangeRate('USD', 'CAD').then((rate) => {
  console.log(rate);
});

getCountries('CAD').then((countries) => {
  console.log(countries);
});

convertCurrency("USD", "CAD", 20).then((message) => {
    console.log(message);
});

