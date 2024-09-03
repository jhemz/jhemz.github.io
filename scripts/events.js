// events.js
function initializeEventsPage() {
    // Initialize the calendar
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Annual Rally',
                start: '2024-09-10',
                end: '2024-09-12'
            },
            {
                title: 'Devon Ride Out',
                start: '2024-10-15'
            },
            {
                title: 'Cornwall Meet-Up',
                start: '2024-11-05'
            }
        ]
    });

    // Initialize the map
    var map = L.map('map').setView([50.715559, -3.530875], 8); // Centered on Devon

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);

    // Define events with more detailed information
    var events = [
        {
            lat: 50.715559, 
            lon: -3.530875, 
            title: 'Annual Rally in Devon',
            description: 'Join us for the Annual Rally in Devon from September 10th to 12th, 2024. Expect a weekend of riding, camaraderie, and great fun!'
        },
        {
            lat: 50.261791, 
            lon: -5.051695, 
            title: 'Cornwall Meet-Up',
            description: 'Our Cornwall Meet-Up on November 5th, 2024, promises scenic routes and a chance to connect with fellow enthusiasts.'
        },
        {
            lat: 50.7107, 
            lon: -3.4742, 
            title: 'Devon Ride Out',
            description: 'Experience the beautiful Devon countryside on October 15th, 2024. Perfect for riders of all levels.'
        }
    ];

    // Add pins to the map with popups containing event details
    events.forEach(function(event) {
        L.marker([event.lat, event.lon]).addTo(map)
            .bindPopup('<b>' + event.title + '</b><br>' + event.description, {
                closeOnClick: false,
                autoClose: false
            })
        .on('click', function(e) {
            this.openPopup();
        });
    });
}