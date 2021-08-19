const listOfStates = {
    India : ["Goa", "Haryana", "Punjab"],
    Turkey : ["Antalya", "Konya", "Isparta"],
    England : ["London", "Liverpool", "Manchester"]
};

const indiaCities = {
    Goa : ["Panaji", "Vasco da Gama", "Baga"],
    Haryana : ["Gurugram", "Faridabad", "Sonipat"],
    Punjab : ["Amritsar", "Ludhiana", "Firozpur"]
};

const turkeyCities = {
    Antalya : ["Kaleici", "Idebessos", "Kitanaura"],
    Konya : ["Cumra", "Beysehir", "Eskil"],
    Isparta : ["Aksu", "Atabey", "Gelendost"]
};

const englandCities = {
    London : ["Birmingham", "Cambridge", "Edinburgh"],
    Liverpool : ["Anfield", "Belle Vale", "Childwall"],
    Manchester : ["Wigan", "Oldham", "Stockport"]
};

let country = document.querySelector('#country');
let state = document.querySelector('#state');
let city = document.querySelector('#city');

country.addEventListener('change', () => {
    let countryName = country.value;

    if (countryName.length == 0) {
        document.querySelector('#state').innerHTML = "<option></option>";
    }else {
        var citiesOption = "";

        for (i of listOfStates[countryName]) {
            citiesOption += "<option>" + i + "</option>";
        }
        state.innerHTML = citiesOption;
    }
});

state.addEventListener('change', () => {
    let stateName = state.value;

    if (stateName.length == 0) {
        document.querySelector('#city').innerHTML = "<option></option>";
    }else if (stateName in indiaCities) {
        var citiesOptionIndia = "";
        for (i of indiaCities[stateName]) {
            citiesOptionIndia += "<option>" + i + "</option>";
        }
        city.innerHTML = citiesOptionIndia;
    }else if (stateName in turkeyCities) {
        var citiesOptionTurkey = "";
        for (i of turkeyCities[stateName]) {
            citiesOptionTurkey += "<option>" + i + "</option>";
        }
        city.innerHTML = citiesOptionTurkey;
    }else if (stateName in englandCities) {
        var citiesOptionEngland = "";
        for (i of englandCities[stateName]) {
            citiesOptionEngland += "<option>" + i + "</option>";
        }
        city.innerHTML = citiesOptionEngland;
    }
});