console.log('script.js start of file reached');
console.log('This many hotspots loaded out of 6:', document.querySelectorAll('.hotspot').length);

// reference our elements
const infoBox   = document.getElementById('infoBox');
const riderImg  = document.getElementById('riderImg');

// attach hover logic to every hotspot
document.querySelectorAll('.hotspot').forEach(spot => {
    spot.addEventListener('mouseenter', () => {
        // update the text box
        infoBox.textContent = spot.dataset.text;  // ← was spot.dataset.text
        infoBox.classList.add('visible');
      
        // if it's the bike, add pulse animation
        if (spot.classList.contains('bike')) {
          riderImg.classList.add('pulse');
        }
      });

  spot.addEventListener('mouseleave', () => {
    infoBox.classList.remove('visible');
    riderImg.classList.remove('pulse');
  });
});

console.log('script.js bottom of file reached');