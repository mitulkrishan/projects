document.addEventListener('DOMContentLoaded', function() {
    // Get elements for menu functionality
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    // Add click event listener to menu icon
    menuIcon.addEventListener('click', () => {
        // Toggle the active class on the navigation list
        navList.classList.toggle('active');
    });

      // Debugging: Check if click event is working
      menuIcon.addEventListener("click", function () {
        console.log("Menu clicked!");
    });

    // Get elements for search functionality
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    const recipeCards = document.querySelectorAll('.recipe-card');

    // Add click event listener to search button
    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const query = searchInput.value.toLowerCase();
        let found = false; // Check if a match is found

        // Loop through recipe cards
        recipeCards.forEach(function(card) {
            const title = card.querySelector('h2').textContent.toLowerCase();
            if (title.includes(query)) {
                window.location.href = card.querySelector('a').href;
                found = true; // Match found
            }
        });

        // Alert if no match is found
        if (!found) {
            alert("Recipe not found. Please try another search term.");
        }
    });
});
