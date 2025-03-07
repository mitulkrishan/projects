document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search-box button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        var searchInput = document.querySelector('.search-box input').value.toLowerCase();
        var recipeCards = document.querySelectorAll('.recipe-card');

        var found = false; // Variable to check if a match is found

        recipeCards.forEach(function(card) {
            var cardTitle = card.querySelector('h2').textContent.toLowerCase();
            if (cardTitle.includes(searchInput)) {
                window.location.href = card.querySelector('a').href;
                found = true; // Match found
            }
        });

        if (!found) {
            alert("Recipe not found. Please try another search term."); // Alert if no match is found
        }
    });
});
