const img = document.createElement('img');
img.src = 'public/mysteryBox.png'; // or a full URL if hosted elsewhere
img.alt = 'Mystery Box';
img.style.cursor = 'grab';
img.style.width = '100px';
img.style.height = '100px';

document.getElementById('mysteryBox-holder').appendChild(img);
