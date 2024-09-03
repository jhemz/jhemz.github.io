// sections.js
const sections = [
    {
        name: 'Anglia',
        meetingPoint: 'The Horseshoes, Cockfield, Suffolk',
        meetingTime: '3rd Tuesday of the month, 8:00 PM',
        contact: 'Mark Holmes'
    },
    {
        name: 'East Midlands',
        meetingPoint: 'The Plough, Stathern, Leicestershire',
        meetingTime: '2nd Thursday of the month, 8:00 PM',
        contact: 'David Hill'
    },
    {
        name: 'East Yorkshire',
        meetingPoint: 'Shiptonthorpe, East Yorkshire',
        meetingTime: '1st Monday of the month, 7:30 PM',
        contact: 'Graham Taylor'
    },
    {
        name: 'Essex',
        meetingPoint: 'The Duck Inn, Newney Green, Chelmsford, Essex',
        meetingTime: 'Last Thursday of the month, 8:00 PM',
        contact: 'Robert White'
    },
    {
        name: 'Gloucester and North Wiltshire',
        meetingPoint: 'The Salutation Inn, Ham, Gloucestershire',
        meetingTime: '3rd Thursday of the month, 8:00 PM',
        contact: 'Chris Morris'
    },
    {
        name: 'Hampshire',
        meetingPoint: 'The Phoenix Inn, Twyford, Hampshire',
        meetingTime: '2nd Tuesday of the month, 8:00 PM',
        contact: 'Paul James'
    },
    {
        name: 'Hertfordshire',
        meetingPoint: 'The Crooked Chimney, Lemsford, Hertfordshire',
        meetingTime: 'Last Wednesday of the month, 8:00 PM',
        contact: 'Peter Smith'
    },
    {
        name: 'Kent',
        meetingPoint: 'The Cock Inn, Boughton Monchelsea, Kent',
        meetingTime: '1st Thursday of the month, 8:00 PM',
        contact: 'Alan Brown'
    },
    {
        name: 'London',
        meetingPoint: 'The Plough, Keston, London',
        meetingTime: '2nd Wednesday of the month, 8:00 PM',
        contact: 'Michael Wilson'
    },
    {
        name: 'Midlands',
        meetingPoint: 'The Unicorn, Beeston, Nottinghamshire',
        meetingTime: '1st Thursday of the month, 8:00 PM',
        contact: 'John Robinson'
    },
    {
        name: 'North West',
        meetingPoint: 'The Crown Inn, Coniston, Cumbria',
        meetingTime: '3rd Wednesday of the month, 8:00 PM',
        contact: 'Richard Walker'
    },
    {
        name: 'North Yorkshire',
        meetingPoint: 'The Crown Hotel, Great Ouseburn, North Yorkshire',
        meetingTime: '2nd Monday of the month, 8:00 PM',
        contact: 'Philip Jackson'
    },
    {
        name: 'Newbury',
        meetingPoint: 'The Bowlers Arms, Enborne Street, Wash Common, Newbury, Berks',
        meetingTime: 'first and third Tuesday of the month',
        contact: 'Malcolm Arnold'
    },
    {
        name: 'Scotland',
        meetingPoint: 'The Unicorn, Kincardine, Scotland',
        meetingTime: 'Last Tuesday of the month, 8:00 PM',
        contact: 'Andrew MacDonald'
    },
    {
        name: 'Somerset and Dorset',
        meetingPoint: 'The Wheatsheaf, Gillingham, Dorset',
        meetingTime: '1st Thursday of the month, 8:00 PM',
        contact: 'James Davies'
    },
    {
        name: 'South East',
        meetingPoint: 'The Fountain, Ashurst, Kent',
        meetingTime: '2nd Thursday of the month, 8:00 PM',
        contact: 'Simon Green'
    },
    {
        name: 'South Midlands',
        meetingPoint: 'The Royal Oak, Cublington, Buckinghamshire',
        meetingTime: '3rd Thursday of the month, 8:00 PM',
        contact: 'Robert Young'
    },
    {
        name: 'South Wales',
        meetingPoint: 'The Three Horseshoes, Peterstone, Cardiff',
        meetingTime: '1st Tuesday of the month, 8:00 PM',
        contact: 'Stephen Turner'
    },
    {
        name: 'Surrey',
        meetingPoint: 'The King William IV, West Horsley, Surrey',
        meetingTime: '1st Wednesday of the month, 8:00 PM',
        contact: 'Charles Evans'
    },
    {
        name: 'Sussex',
        meetingPoint: 'The Half Moon, Balcombe, West Sussex',
        meetingTime: '1st Tuesday of the month, 8:00 PM',
        contact: 'Edward King'
    },
    {
        name: 'Wessex',
        meetingPoint: 'The Bull, Downton, Wiltshire',
        meetingTime: 'Last Thursday of the month, 8:00 PM',
        contact: 'Peter Harris'
    },
    {
        name: 'West Midlands',
        meetingPoint: 'The Fountain Inn, Clent, Worcestershire',
        meetingTime: '1st Wednesday of the month, 8:00 PM',
        contact: 'Frank Martin'
    },
    {
        name: 'West Yorkshire',
        meetingPoint: 'The George Hotel, Hathersage, West Yorkshire',
        meetingTime: '2nd Wednesday of the month, 8:00 PM',
        contact: 'Brian Johnson'
    },
    {
        name: 'Australia',
        meetingPoint: 'Sydney Motorcycle Club, Sydney',
        meetingTime: '1st Saturday of the month, 10:00 AM',
        contact: 'Bruce Wayne'
    },
    {
        name: 'Belgium',
        meetingPoint: 'The Road House, Brussels',
        meetingTime: '1st Sunday of the month, 9:30 AM',
        contact: 'Pierre Dupont'
    },
    {
        name: 'Canada (Ontario)',
        meetingPoint: 'The Bike Shed, Toronto',
        meetingTime: '3rd Sunday of the month, 11:00 AM',
        contact: 'David Clark'
    },
    {
        name: 'Denmark',
        meetingPoint: 'Copenhagen Riders Club, Copenhagen',
        meetingTime: '2nd Saturday of the month, 10:00 AM',
        contact: 'Lars Hansen'
    },
    {
        name: 'Finland',
        meetingPoint: 'The Riders Inn, Helsinki',
        meetingTime: '1st Thursday of the month, 7:00 PM',
        contact: 'Mikko Laine'
    },
    {
        name: 'France',
        meetingPoint: 'Café des Motards, Paris',
        meetingTime: 'Last Saturday of the month, 2:00 PM',
        contact: 'Jean Lefevre'
    },
    {
        name: 'Germany',
        meetingPoint: 'The Motorrad, Munich',
        meetingTime: '2nd Sunday of the month, 10:00 AM',
        contact: 'Hans Müller'
    },
    {
        name: 'Netherlands',
        meetingPoint: 'De Motortent, Amsterdam',
        meetingTime: '3rd Friday of the month, 7:00 PM',
        contact: 'Jan de Vries'
    },
    {
        name: 'New Zealand',
        meetingPoint: 'Auckland Motorcycle Club, Auckland',
        meetingTime: '1st Sunday of the month, 10:00 AM',
        contact: 'Mark Johnson'
    },
    {
        name: 'Norway',
        meetingPoint: 'Oslo Bikers, Oslo',
        meetingTime: '2nd Tuesday of the month, 7:00 PM',
        contact: 'Erik Larsen'
    },
    {
        name: 'South Africa',
        meetingPoint: 'Cape Town Riders Club, Cape Town',
        meetingTime: '1st Saturday of the month, 9:00 AM',
        contact: 'Derek Williams'
    },
    {
        name: 'Sweden',
        meetingPoint: 'Stockholm Moto Club, Stockholm',
        meetingTime: '2nd Saturday of the month, 10:00 AM',
        contact: 'Björn Andersson'
    },
    {
        name: 'Switzerland',
        meetingPoint: 'Zurich Bike Café, Zurich',
        meetingTime: 'Last Friday of the month, 6:00 PM',
        contact: 'Lukas Meier'
    },
    {
        name: 'USA (California)',
        meetingPoint: 'The Ace Cafe, Los Angeles',
        meetingTime: '1st Saturday of the month, 9:00 AM',
        contact: 'Jack Smith'
    },
    {
        name: 'USA (East Coast)',
        meetingPoint: 'Harley’s Roadhouse, New York',
        meetingTime: '3rd Sunday of the month, 10:00 AM',
        contact: 'Sam Wilson'
    },
    {
        name: 'USA (North East)',
        meetingPoint: 'Red Barn, Boston',
        meetingTime: '2nd Saturday of the month, 9:00 AM',
        contact: 'Thomas Green'
    },
    {
        name: 'USA (Pacific Northwest)',
        meetingPoint: 'Seattle Biker Club, Seattle',
        meetingTime: '1st Sunday of the month, 10:00 AM',
        contact: 'Paul Adams'
    },
    {
        name: 'USA (South)',
        meetingPoint: 'Austin Riders, Austin, Texas',
        meetingTime: '2nd Sunday of the month, 9:00 AM',
        contact: 'Mike Johnson'
    },
    {
        name: 'USA (South East)',
        meetingPoint: 'The Big House, Atlanta, Georgia',
        meetingTime: '1st Saturday of the month, 9:00 AM',
        contact: 'Tom Brown'
    },
    {
        name: 'USA (South West)',
        meetingPoint: 'Phoenix Motorcycle Club, Phoenix, Arizona',
        meetingTime: '3rd Saturday of the month, 10:00 AM',
        contact: 'James Miller'
    }
];

function createSectionCards() {
    const container = document.querySelector('.sections-list');
    sections.forEach(section => {
        const card = document.createElement('div');
        card.classList.add('section-card');

        const img = document.createElement('img');
        img.src = '/images/ClubLogo.svg';
       
        if (section.name.includes('Newbury')) {
            img.src = '/images/' + section.name + '.png';
        }
       
       
        img.alt = `${section.name} Section Badge`;
        img.classList.add('section-badge');

        const title = document.createElement('h3');
        title.textContent = section.name;

        const meetingPoint = document.createElement('p');
        meetingPoint.innerHTML = `<strong>Meeting Point:</strong> ${section.meetingPoint}`;

        const meetingTime = document.createElement('p');
        meetingTime.innerHTML = `<strong>Meeting Time:</strong> ${section.meetingTime}`;

        const contact = document.createElement('p');
        contact.innerHTML = `<strong>Contact:</strong> ${section.contact}`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(meetingPoint);
        card.appendChild(meetingTime);
        card.appendChild(contact);

        container.appendChild(card);
    });
}

// Function to initialize the map
function initializeMap() {
    const map = L.map('map').setView([54.5, -4.0], 6); 

    // Load and display tile layers on the map (OpenStreetMap tiles are free and widely used)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // GeoJSON Data URL (you can replace this with your own GeoJSON data URL)
    const geojsonUrl = 'counties.geojson';
    const sectionNames = new Set(sections.map(section => section.name));
    console.log(sectionNames)
    // Load GeoJSON data
    fetch(geojsonUrl)
        .then(response => response.json())
        .then(data => {
            // Filter the GeoJSON data to only include counties that match the section names
            const filteredData = data.features.filter(feature => 
                sectionNames.has(feature.properties.ctyua19nm)
            );

            // Add filtered GeoJSON data to the map
            L.geoJSON(filteredData, {
                style: function(feature) {
                    return { color: "#ff0000", weight: 2 }; // Customize the style (red borders)
                },
                onEachFeature: function(feature, layer) {
                    // Bind popup for each matching county
                    layer.bindPopup('<strong>' + feature.properties.ctyua19nm + '</strong>');
                }
            }).addTo(map);
        });
}

function initializeSectionsPage() {
    createSectionCards();
    initializeMap();
}