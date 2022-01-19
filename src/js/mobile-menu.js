(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu-btn'),
    closeMenuBtn: document.querySelector('.close-menu-btn'),
    closeMenuHome: document.querySelector('.close-home'),
    closeMenuAbout: document.querySelector('.close-about'),
    closeMenuHow: document.querySelector('.close-how'),
    closeMenuProducts: document.querySelector('.close-products'),
    closeMenuContact: document.querySelector('.close-contact'),
    menu: document.querySelector('.menu-container'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuHome.addEventListener('click', toggleMenu);
  refs.closeMenuAbout.addEventListener('click', toggleMenu);
  refs.closeMenuHow.addEventListener('click', toggleMenu);
  refs.closeMenuContact.addEventListener('click', toggleMenu);
  refs.closeMenuProducts.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
