const cardContainer = document.querySelector(".card-container");



const getCountryData = (country) => {
const request = new XMLHttpRequest();

const url = `https://restcountries.com/v3.1/name/${country}`;

request.open('GET', url, true);
request.send();

request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log('data', data);

    console.log(data.name.official);
    console.log(data.region);
    console.log(data.flags[Object.keys(data.flags)[0]]);
    console.log(data.languages[Object.keys(data.languages)[0]]);

    const html =
        ` <div class="card">
            <div class="image img">
                <img src="${data.flags[Object.keys(data.flags)[0]]}"
                    alt="">
            </div>
            <div class="card-info">
                <div class="top">
                    <h1 class="name">${data.name.official}</h1>
                    <div class="region">${data.region}</div>
                </div>
                <div class="bottom">
                    <div class="population"><i class="fa-solid fa-person"></i> ${data.population/1000000}</div>
                    <div class="language"><i class="fa-solid fa-language"></i> ${data.languages[Object.keys(data.languages)[0]]}</div>
                    <div class="currency"><i class="fa-solid fa-money-bill-1-wave"></i> ${data.currencies[Object.keys(data.currencies)[0][Object.keys(data.currencies[Object.keys(data.currencies)[0]])]]}</div>
                </div>
            </div>
        </div>`
    
    cardContainer.insertAdjacentHTML("beforeend", html)
    cardContainer.style.opacity = "1";
})

    
}


getCountryData("Bharat")
getCountryData("portugal")
getCountryData("usa")
getCountryData("japan")
getCountryData("germany")
getCountryData("england")