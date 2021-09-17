const loadData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => showData(data))
}

const showData = countries => {
    const container = document.getElementById("countries")
    const country = countries.map(pd => getHtmlCount(pd))
    container.innerHTML = country.join(" ")
}

const getHtmlCount = data => {
    return `
    <div class="country">
        <h2>Name: ${data.name}</h2>
        <p>Capital: ${data.capital}</p>
        <img src="${data.flag}" alt="">
    </div>
    `
}

loadData()