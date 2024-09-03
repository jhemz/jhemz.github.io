// main.js
function loadPage(page) {
    if (page === 'amoc-spares') {
        document.getElementById('content').innerHTML = `
        <iframe src="https://www.amoc-parts.com/store/comersus_listCategoriesAndProducts.asp" 
                style="width: 100%; height: 100vh; border: none;">
        </iframe>`;
    } else if
     (page === 'kettering-classics') {
        document.getElementById('content').innerHTML = `
        <iframe src="https://www.kettering-classics.com/store/comersus_listCategoriesAndProducts.asp" 
                style="width: 100%; height: 100vh; border: none;">
        </iframe>`;
    } else {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;

            // Initialize home page
            if (page === 'home.html') {
                initializeHomePage();
            }

            // Initialize events page
            if (page === 'events.html') {
                initializeEventsPage();
            }

            // Initialize sections page
            if (page === 'sections.html') {
                initializeSectionsPage();
            }

            // Initialize sections page
            if (page === 'bikes.html') {
                initializeBikesPage();
                loadWDBikeTable();
            }

            // Initialize sections page
            if (page === 'history.html') {
                createHistoryPage();
            }
            
        });
    }
        // Remove 'active' class from all links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    const activeLink = Array.from(navLinks).find(link => link.getAttribute('onclick') === `loadPage('${page}')`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

}

document.addEventListener('DOMContentLoaded', function() {
    loadPage('home.html');
});