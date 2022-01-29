import './sass/main.scss';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

console.log(refs.openModalBtn);
console.log(refs.closeModalBtn);
console.log(refs.modal);

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  console.log('click');
  refs.modal.classList.toggle('is-hidden');
}
