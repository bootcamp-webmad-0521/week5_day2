
document.querySelector('#theButton').onclick = () => {

    const countryName = document.querySelector('#theInput').value

    getCountryInfo(countryName)
}



function getCountryInfo(countryName) {

    axios
        .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => {

            const countryInfo = response.data[0]
            document.querySelector('#result').innerHTML = `Tiene una población de ${countryInfo.population} y su capital es ${countryInfo.capital}`
        })
        .catch(err => {
            document.querySelector('#result').innerHTML = `<span style="color: red">${countryName} no existe, merluzo</span>`
        })
}