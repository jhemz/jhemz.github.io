// home.js
function addMasonryItem(imageSrc, description) {
    var container = document.getElementById('masonry-container');
    var newItem = document.createElement('div');
    newItem.classList.add('masonry-item');

    var img = document.createElement('img');
    img.src = imageSrc;
    img.alt = description;

    var text = document.createElement('p');
    text.textContent = description;

    newItem.appendChild(img);
    newItem.appendChild(text);
    container.appendChild(newItem);
}

function initializeHomePage() {
    addMasonryItem('/images/rally1.jpeg', 'Jampot Rally in Alyesford - August 2024');
    addMasonryItem('/images/rally2.jpeg', 'Jampot Rally in Alyesford - August 2024');
    addMasonryItem('/images/rally3.jpg', 'Jampot Rally in Alyesford - August 2024');
    addMasonryItem('/images/saturday-run.png', 'Jampot Rally in Alyesford, Saturday Run to Tenterdon - August 2024');
}