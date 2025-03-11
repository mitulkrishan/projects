document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded!"); // Debugging: Check if script runs

    // ========== LOAD HEADER AND FOOTER FIRST ==========
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            console.log("Header Loaded.");
            initializeMenu(); // Initialize Menu Toggle after Header is Loaded
        })
        .catch(error => console.error("Error loading header:", error));

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
            console.log("Footer Loaded.");
        })
        .catch(error => console.error("Error loading footer:", error));

    // ========== MENU TOGGLE FUNCTIONALITY ==========
    function initializeMenu() {
        const menuIcon = document.getElementById("menu-icon");
        const navList = document.getElementById("nav-list");

        if (menuIcon && navList) {
            menuIcon.addEventListener("click", function () {
                navList.classList.toggle("active");
                console.log("Menu clicked!");
            });
        } else {
            console.error("Menu elements not found in the DOM.");
        }
    }

    // ========== SEARCH FUNCTIONALITY ==========
    const searchButton = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input");
    const recipeCards = document.querySelectorAll(".recipe-card");

    if (searchButton && searchInput && recipeCards.length > 0) {
        searchButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page refresh
            const query = searchInput.value.trim().toLowerCase();

            if (query === "") {
                alert("Please enter a recipe name.");
                return;
            }

            let found = false;

            recipeCards.forEach(function (card) {
                const title = card.querySelector("h2").textContent.toLowerCase();

                if (title.includes(query)) {
                    console.log("Recipe Found:", title);
                    window.location.href = card.querySelector("a").href;
                    found = true;
                }
            });

            if (!found) {
                alert("Recipe not found. Please try another search term.");
            }
        });
    } else {
        console.error("Search elements not found in the DOM.");
    }
});
