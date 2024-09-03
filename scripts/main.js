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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar a');

    menuToggle.addEventListener('click', function() {
        // Toggle the active class on the menu button
        menuToggle.classList.toggle('active');
        
        // Toggle the expanded class on the nav
        navbar.classList.toggle('expanded');
        
        // Remove the collapsed class if it exists
        navbar.classList.remove('collapsed');
    });

    // Collapse the nav panel when any link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from the menu button
            menuToggle.classList.remove('active');
            
            // Remove the expanded class to collapse the nav
            navbar.classList.remove('expanded');
            
            // Add the collapsed class to hide the nav
            navbar.classList.add('collapsed');
        });
    });
});