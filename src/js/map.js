(() => {
  const refs = {
    openMapBtn: document.querySelector('.map-open'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('.map-window'),
  };
  refs.openMapBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
