const cardContainer = document.querySelector(".card-container");
const btn = document.querySelector("#bt");

const errMsg = document.querySelector(".err-msg");

const renderError = (msg) => {
    errMsg.insertAdjacentText('beforeend', `${msg}`);
}



// const getCountryData = (country) => {
// const request = new XMLHttpRequest();

// const url = `https://restcountries.com/v3.1/name/${country}`;

// request.open('GET', url, true);
// request.send();

// request.addEventListener('load', function () {
    // const [data] = JSON.parse(this.responseText);
    // console.log('data', data);

    // console.log(data.name.official);
    // console.log(data.region);
    // console.log(data.flags[Object.keys(data.flags)[0]]);
    // console.log(data.languages[Object.keys(data.languages)[0]]);

// const html =
//     ` <div class="card">
//         <div class="image img">
//             <img src="${data.flags[Object.keys(data.flags)[0]]}"
//                 alt="">
//         </div>
//         <div class="card-info">
//             <div class="top">
//                 <h1 class="name">${data.name.official}</h1>
//                 <div class="region">${data.region}</div>
//             </div>
//             <div class="bottom">
//                 <div class="population"><i class="fa-solid fa-person"></i> ${data.population/1000000}</div>
//                 <div class="language"><i class="fa-solid fa-language"></i> ${data.languages[Object.keys(data.languages)[0]]}</div>
//                 <div class="currency"><i class="fa-solid fa-money-bill-1-wave"></i> ${data.currencies[Object.keys(data.currencies)[0][Object.keys(data.currencies[Object.keys(data.currencies)[0]])]]}</div>
//             </div>
//         </div>
//     </div>`

// cardContainer.insertAdjacentHTML("beforeend", html)
//     cardContainer.style.opacity = "1";
// })

    
// }


// getCountryData("Bharat")
// getCountryData("portugal")
// getCountryData("usa")
// getCountryData("japan")
// getCountryData("germany")
// getCountryData("england")



// MODERN   AJAX

const renderCountry = (data, classname="") => {
    const html =
        `
    <div class="card ${classname}">
        <div class="image img">
            <img src="${data.flags[Object.keys(data.flags)[0]]}"
                alt="">
        </div>
        <div class="card-info">
            <div class="top">
                <h1 class="name">${data.name.official}</h1>
                <div class="region">${data.region}</div>
            </div>
            <p class="neigh">Neighbour Country</p> 
            <div class="bottom">
                <div class="population"><i class="fa-solid fa-person"></i> ${(data.population/1000000).toFixed(2)} M</div>
                <div class="language"><i class="fa-solid fa-language"></i> ${[Object.values(data.languages)[0]]}</div>
                <div class="currency"><i class="fa-solid fa-money-bill-1-wave"></i> ${[Object.values(data.currencies)[0].name]}</div>
            </div>
        </div>
    </div>`

    cardContainer.insertAdjacentHTML("beforeend", html)
    cardContainer.style.opacity = '1';
}

const getJSON = (url, error="Something went wrong") => {
    return fetch(url).then((response) => {
         if (!response.ok)
                throw new Error(`${error} (${response.status})`);
            return response.json();
    })
}


function getCountryData(country) {
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    //     .then((response) => {
    //         if (!response.ok)
    //             throw new Error(`(${response.status}) Country Not Found `);
    //         return response.json();
            
    //     })
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        `Country Not Found `
    )
        .then(function (data) {
            renderCountry(data[0])
            // const neighbour = 'rfeghe'
            const neighbour = data[0].borders?.[0]

            if (!neighbour) throw new Error(`Neighbour not found`);

            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, `Neighbour Country Not Found `);
        })
        .then(function (data) {
            renderCountry(data[0], "neighbour")
        })
        .catch(err => {
            console.error(`${err} Something Went Wrong`)
            renderError(`Something went wrong. ${err.message}. Try again!`)
        })
}

btn.addEventListener('click', () => 
    getCountryData("germany")
)



getCountryData("Bharat")
getCountryData("portugal")
getCountryData("usa")
getCountryData("japan")
getCountryData("germany")
getCountryData("england")
