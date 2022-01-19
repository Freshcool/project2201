(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buy-open]'),
    openModalMob: document.querySelector('[data-modal-buy-open-mob]'),
    closeModalBtn: document.querySelector('[data-modal-buy-close]'),
    modal: document.querySelector('[data-modal-buy]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalMob.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
