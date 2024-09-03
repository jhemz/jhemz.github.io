function createHistoryPage() {
    const timelineDates = document.querySelectorAll('.timeline-date');
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineDates.forEach(date => {
        date.addEventListener('click', function() {
            // Remove active class from all dates
            timelineDates.forEach(d => d.classList.remove('active'));
            // Add active class to the clicked date
            this.classList.add('active');

            // Hide all timeline items
            timelineItems.forEach(item => item.style.display = 'none');

            // Show the associated timeline item
            const dateToShow = this.getAttribute('data-date');
            const timelineItemToShow = document.querySelector(`.timeline-item[data-date="${dateToShow}"]`);
            if (timelineItemToShow) {
                timelineItemToShow.style.display = 'block';
            }
        });
    });

    // Trigger click on the first date to show the first item by default
    if (timelineDates.length > 0) {
        timelineDates[0].click();
    }
};

function initializeBikesPage() {
    createHistoryPage();
}