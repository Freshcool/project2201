(() => {
  const refs = {
    openModalCow: document.querySelector('[data-modal-open-cow]'),
    closeModalCow: document.querySelector('[data-modal-close-cow]'),
    modalCow: document.querySelector('[data-modal-cow]'),
  };
  refs.openModalCow.addEventListener('click', toggleModal);
  refs.closeModalCow.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalCow.classList.toggle('visually-hidden-cow');
  }
})();
