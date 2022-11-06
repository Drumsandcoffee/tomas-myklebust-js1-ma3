const resultsContainer = document.querySelector(".results");
const loaderAnimation = document.querySelector(".loader");

const apiKey = `8bed245dcd334132baa8a982865aae23`;

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log();

        const games = data.results || [];

        resultsContainer.innerHTML = "";

        for( let i = 0; i < games.length; i++) {
            console.log(games[i].rating);
            console.log(games[i].name);
            console.log(games[i].tags.length);

            if(i === 8){
                break;
            }
            loaderAnimation.innerHTML = "";
            resultsContainer.innerHTML +=`
            <div class="results">
                <span class="name">${games[i].name}</span>
                <span class="rating">${games[i].rating}</span>
                <span class="number_tags">${games[i].tags.length}</span>
            </div>
            `;

        }
        }catch(error) {
            console.log(error);
            alert("oops", error.message);
    }
}
getGames();

