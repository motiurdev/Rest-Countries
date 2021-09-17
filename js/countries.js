const loadData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => showData(data))
}

const showData = countries => {
    console.log(countries[0]);
    const container = document.getElementById("countries")
    const country = countries.map(pd => getHtmlCount(pd))
    container.innerHTML = country.join(" ")
}

const getHtmlCount = data => {
    const { name, capital, flag, topLevelDomain, population } = data;
    return `
    <div class="country">
    <img src="${flag}" alt="">
        <h2>Name: ${name}</h2>
        <p><b>Capital:</b> ${capital}</p>
        <p><b>Language:</b> ${data.languages[0].name}</p>
        <p><b>Currency:</b> ${data.currencies[0].name}(${data.currencies[0].symbol})</p>
        <p><b>Top Level Domain:</b> ${topLevelDomain}</p>
        <p><b>Population:</b> ${population}</p>
    </div>
    `
}

loadData()