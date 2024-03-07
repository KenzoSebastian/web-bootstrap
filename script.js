const subSearch = Array.from(document.querySelectorAll(".sub-search"));
const input = document.querySelector("#search");


subSearch.forEach((e) => {
    e.addEventListener("click", (target) => {
        subSearch[0].classList.remove("active");
        const item = target.target;

        const h1 = document.querySelector("h1.ubah-tulisan");
        if (item.innerText === " Search All") {
            h1.innerHTML = "Where To?";
            input.placeholder = "Place to go, things to do, hotel..";
        } else if (item.innerText === " Hotel") {
            h1.innerHTML = "Stay somewhere great";
            input.placeholder = "Hotel name or destination";
        } else if (item.innerText === " Thing to Do") {
            h1.innerHTML = "Do something fun";
            input.placeholder = "Attraction, activity or destination";
        } else if (item.innerText === " Restaurants") {
            h1.innerHTML = "Find places to eat";
            input.placeholder = "Restaurant or destination";
        } else if (item.innerText === " Vacation Retals") {
            h1.innerHTML = "Explore places to rent";
            input.placeholder = "Destination";
        }
    })
})
