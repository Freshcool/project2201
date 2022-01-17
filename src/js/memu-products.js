(() => {
  const creamModalBtn = document.querySelector('[data-cream-open]');
  const coffeeModalBtn = document.querySelector('[data-coffee-open]');
  const milkshakesModalBtn = document.querySelector('[data-milkshakes-open]');

  creamModalBtn.addEventListener('click', () => {
    creamModalBtn.classList.toggle('is-cream');
  });

  coffeeModalBtn.addEventListener('click', () => {
    coffeeModalBtn.classList.toggle('is-coffee');
  });
  milkshakesModalBtn.addEventListener('click', () => {
    milkshakesModalBtn.classList.toggle('is-milkshakes');
  });
})();
