document.addEventListener('DOMContentLoaded', function () {
  const leafContainer = document.getElementById('leaf-container');
  const screenWidth = window.innerWidth;

  function createLeaf() {
      const leaf = document.createElement('div');
      leaf.className = Math.random() < 0.5 ? 'falling-leaf' : 'falling-leaf-red'; // Randomly choose the leaf color
      leaf.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      leafContainer.appendChild(leaf);

      // Animate the leaf
      anime({
          targets: leaf,
          translateX: () => {
              const randomX = anime.random(-50, 50);
              // Ensure the leaf stays within the visible area
              const newPosition = Math.min(Math.max(parseFloat(leaf.style.left) + randomX, 0), screenWidth);
              return `${newPosition}vw`;
          },
          translateY: '100vh', // Move the leaf vertically down
          duration: () => anime.random(1000, 5000), // Longer duration for a slower fall
          easing: 'linear',
          complete: function () {
              leafContainer.removeChild(leaf); // Remove the leaf once it reaches the bottom
          },
      });
  }

  // Create new leaves every second
  setInterval(createLeaf, 300);
});
