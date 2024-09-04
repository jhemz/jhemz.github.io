// bikes.js
// bikes.js
const bikes = [
    {
        name: "Matchless G3WO",
        image: "/images/g3wo.jpg",
        description: "The Matchless G3WO was a military motorcycle used extensively during World War II. It was known for its ruggedness and reliability in tough conditions.",
        year: 1940,
        engine: "350cc single-cylinder",
        topSpeed: "75 mph",
        weight: "405 lbs"
    },
    {
        name: "Matchless G3L",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Matchless_WG3L_350.jpg",
        description: "Introduced in 1941, the G3L was the first motorcycle to feature Teledraulic forks, which became a standard in motorcycle design. It served as a military bike during WWII.",
        year: 1941,
        engine: "350cc single-cylinder",
        topSpeed: "70 mph",
        weight: "390 lbs"
    },
    {
        name: "AJS Model 16",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/AJS_Model_16MS_1953.JPG",
        description: "The AJS Model 16, produced from 1945 onwards, was a civilian version of the military G3L. It was a reliable and popular choice among post-war motorcycle enthusiasts.",
        year: 1945,
        engine: "350cc single-cylinder",
        topSpeed: "70 mph",
        weight: "390 lbs"
    },
    {
        name: "AJS Model 18",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/AJS_18S_500_cc_1952.jpg",
        description: "The AJS Model 18 was one of the most popular motorcycles produced by AJS in the post-war era. Known for its reliability and robust design, this bike is a favorite among classic motorcycle enthusiasts.",
        year: 1945,
        engine: "500cc single-cylinder",
        topSpeed: "85 mph",
        weight: "410 lbs"
    },
    {
        name: "Matchless G80",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Matchless-g80s.jpg",
        description: "The Matchless G80 is an iconic motorcycle known for its powerful engine and smooth ride. A staple of the Matchless brand, this bike continues to capture the hearts of riders worldwide.",
        year: 1946,
        engine: "500cc single-cylinder",
        topSpeed: "90 mph",
        weight: "420 lbs"
    },
    {
        name: "AJS 7R",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/06/AJS_7R_motorcycle.jpg",
        description: "The AJS 7R, also known as the 'Boy Racer', was a racing motorcycle produced from 1948 to 1963. It was highly successful in competition and remains a legendary bike in racing history.",
        year: 1948,
        engine: "350cc single-cylinder",
        topSpeed: "100 mph",
        weight: "285 lbs"
    },
    {
        name: "Matchless G9",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Matchless_G9_1951.JPG",
        description: "The Matchless G9 was introduced in 1949 as a 500cc twin-cylinder motorcycle. It was designed to provide a smoother and more powerful ride compared to the single-cylinder models.",
        year: 1949,
        engine: "500cc twin-cylinder",
        topSpeed: "85 mph",
        weight: "400 lbs"
    },
    {
        name: "AJS Model 20",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/AJS_Model_20_%281954%29.jpg",
        description: "The AJS Model 20 was a 500cc twin-cylinder motorcycle, introduced in 1949. It was known for its smooth performance and became a popular model in the early 1950s.",
        year: 1949,
        engine: "500cc twin-cylinder",
        topSpeed: "85 mph",
        weight: "395 lbs"
    },
    {
        name: "Matchless G45",
        image: "https://via.placeholder.com/400x300.png?text=Matchless+G45",
        description: "The Matchless G45 was a racing motorcycle introduced in 1951. It was based on the G9 but was tuned for racing, making it a competitive machine on the track.",
        year: 1951,
        engine: "500cc twin-cylinder",
        topSpeed: "115 mph",
        weight: "340 lbs"
    },
    {
        name: "Matchless G11",
        image: "https://via.placeholder.com/400x300.png?text=Matchless+G11",
        description: "The Matchless G11, introduced in 1956, featured a 600cc twin-cylinder engine. It was designed for touring and offered more power and comfort for long-distance rides.",
        year: 1956,
        engine: "600cc twin-cylinder",
        topSpeed: "95 mph",
        weight: "420 lbs"
    },
    {
        name: "AJS Model 31",
        image: "https://via.placeholder.com/400x300.png?text=AJS+Model+31",
        description: "The AJS Model 31 was introduced in 1958 as a 650cc twin-cylinder motorcycle. It was designed to compete with other large-capacity bikes of the time and offered a blend of power and reliability.",
        year: 1958,
        engine: "650cc twin-cylinder",
        topSpeed: "100 mph",
        weight: "430 lbs"
    },
    {
        name: "Matchless G12",
        image: "https://via.placeholder.com/400x300.png?text=Matchless+G12",
        description: "The Matchless G12, introduced in 1958, was a 650cc twin-cylinder motorcycle. It was one of the most powerful and largest bikes produced by Matchless, offering a great ride for long distances.",
        year: 1958,
        engine: "650cc twin-cylinder",
        topSpeed: "100 mph",
        weight: "440 lbs"
    },
    {
        name: "AJS Model 14",
        image: "https://via.placeholder.com/400x300.png?text=AJS+Model+14",
        description: "The AJS Model 14, introduced in 1958, was a 250cc single-cylinder motorcycle. It was aimed at the commuter market and was known for its lightweight and easy handling.",
        year: 1958,
        engine: "250cc single-cylinder",
        topSpeed: "70 mph",
        weight: "330 lbs"
    },
    {
        name: "AJS Model 8",
        image: "https://via.placeholder.com/400x300.png?text=AJS+Model+8",
        description: "The AJS Model 8 was a 350cc single-cylinder motorcycle introduced in 1960. It was designed to be a robust and reliable bike, suitable for both commuting and touring.",
        year: 1960,
        engine: "350cc single-cylinder",
        topSpeed: "75 mph",
        weight: "370 lbs"
    },
    {
        name: "Matchless G2",
        image: "https://via.placeholder.com/400x300.png?text=Matchless+G2",
        description: "The Matchless G2, introduced in 1960, was a 250cc single-cylinder motorcycle. It was part of the lightweight series and was popular among newer riders for its manageable power and handling.",
        year: 1960,
        engine: "250cc single-cylinder",
        topSpeed: "70 mph",
        weight: "330 lbs"
    },
    {
        name: "Matchless G50",
        image: "https://via.placeholder.com/400x300.png?text=Matchless+G50",
        description: "The Matchless G50, introduced in 1958, was a racing motorcycle based on the AJS 7R but with a larger 500cc engine. It became a legendary racer and is still revered in classic racing circles.",
        year: 1962,
        engine: "500cc single-cylinder",
        topSpeed: "120 mph",
        weight: "320 lbs"
    }
];

function createBikeCards() {
    const container = document.querySelector('.bikes-container');
    container.innerHTML = ''; // Clear existing content

    bikes.forEach(bike => {
        console.log(bike.name)
        // Dynamically create the card structure using template literals
        const cardHTML = `
            <div class="card responsive-card">
                <div class="card-image">
                    <img src="${bike.image}" alt="Bike Image" style="width: 100%; height: auto;" />
                </div>
                <div class="card-content">
                    <h3>${bike.name}</h3>
                    <p>${bike.description}</p>
                    <ul class="bike-stats">
                        <li><strong>Year:</strong> ${bike.year}</li>
                        <li><strong>Engine:</strong> ${bike.engine}</li>
                        <li><strong>Top Speed:</strong> ${bike.topSpeed}</li>
                        <li><strong>Weight:</strong> ${bike.weight}</li>
                    </ul>
                </div>
            </div>`;

        // Insert the card HTML into the container
        container.innerHTML += cardHTML;
    });
}

// Function to fetch and process the number plate data
function loadNumberPlateData() {
    fetch('numberPlates.json')
        .then(response => response.json())
        .then(data => {
            const numberPlateData = data;
            populateTable(numberPlateData);
        });
}

// Function to populate the table columns with number plate data
function populateTable(data) {
    const tableWrapper = document.querySelector('.table-wrapper');
    tableWrapper.innerHTML = ''; // Clear existing content
   
    const maxRowsPerColumn = 80;
    let currentColumn;
    let currentTableBody;
    let rowCount = 0;

    data.forEach((item, index) => {
        if (rowCount % maxRowsPerColumn === 0) {
            // Create a new column and table
            const column = document.createElement('div');
            column.classList.add('table-column');

            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tr = document.createElement('tr');

            // Create the table header cells
            const thCode = document.createElement('th');
            thCode.textContent = 'Code';

            const thLocation = document.createElement('th');
            thLocation.textContent = 'Location';

            // Append the header cells to the header row
            tr.appendChild(thCode);
            tr.appendChild(thLocation);

            // Append the row to the table header
            thead.appendChild(tr);
            table.appendChild(thead);

            currentTableBody = document.createElement('tbody');
            table.appendChild(currentTableBody);

            column.appendChild(table);
            tableWrapper.appendChild(column);

            currentColumn = column;
        }

        const tr = document.createElement('tr');
        const tdCode = document.createElement('td');
        tdCode.textContent = item.prefix;

        const tdLocation = document.createElement('td');
        tdLocation.textContent = item.location;

        tr.appendChild(tdCode);
        tr.appendChild(tdLocation);
        currentTableBody.appendChild(tr);

        rowCount++;
    });
}

// Function to fetch the number plate data and determine the bike's location
function getBikeLocation(numberPlate) {
    return fetch('numberPlates.json')
        .then(response => response.json())
        .then(data => {
            const prefix = extractPrefix(numberPlate);
            if (prefix) {
                return getLocationByPrefix(data, prefix);
            }
            return "Invalid number plate";
        });
}

// Function to extract the prefix from the number plate
function extractPrefix(numberPlate) {
    const match = numberPlate.match(/^[A-Z]+/i); // Match the starting letters
    return match ? match[0].slice(-2).toUpperCase() : null; // Extract the last two letters as the prefix
}

// Function to get the location by the prefix
function getLocationByPrefix(data, prefix) {
    const entry = data.find(item => item.prefix === prefix);
    return entry ? entry.location : "Unknown location";
}

// Function to display the location in the page
function showBikeLocation() {
    const input = document.getElementById('numberPlateInput').value;
    getBikeLocation(input).then(location => {
        document.getElementById('locationDisplay').textContent = `Location: ${location}`;
    });
}



// Function to open a tab
function openTab(evt, tabName) {
    // Hide all tabcontent by default
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the 'active' class from all tablinks
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Initialize the bikes page and load the number plate data
function initializeBikesPage() {
    createBikeCards();
    loadNumberPlateData();
    document.querySelector('.tablinks').click(); // Automatically click the first tab
}

// The existing JavaScript functions for creating bike cards, loading data, etc., go here
// ...

// Call the initialization function on page load
document.addEventListener('DOMContentLoaded', initializeBikesPage);

function initializeBikesPage() {
  
    createBikeCards();
    loadNumberPlateData();
    console.log('tableWrapper')
    // Automatically activate the first tab without needing an event object
    const firstTab = document.querySelector('.tablinks'); // Select the first tablink
    if (firstTab) {
        openTab({ currentTarget: firstTab }, 'Bikes'); // Pass a fake event object
    }

    document.getElementById("numberPlateInput").addEventListener("input", function (e) {
        let value = e.target.value.replace(/\s+/g, '').toUpperCase(); // Remove any spaces and convert to uppercase
       
        if (value.length > 3) {
            value = value.slice(0, 3) + ' ' + value.slice(3); // Add space after the third character
        }
        e.target.value = value;
    });
}

