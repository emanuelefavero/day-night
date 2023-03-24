// CREATE STARS FUNCTION
function createStars() {
    const sky = document.querySelector(".sky");
    count = 0;
    while (count <= 300) {
        count++;
        const star = document.createElement("div");
        // star.innerHTML = "";
        sky.appendChild(star);

        star.classList.add("stars");
        star.style.left = Math.floor(Math.random() * 1440) +
            "px";
        star.style.top = Math.floor(Math.random() * window
                .innerHeight) +
            "px";
        // star.style.transform = "scale(Math.floor(Math.random() * 2))"
        star.style.transform = "scale(" + ((Math.random() * 20) / 10)
            .toFixed(2) + ")";
    }
}

createStars();
