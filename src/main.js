import './style.css'; 

const modal = document.getElementById('modal-affiliate');
const modalCloseBtn = document.getElementById('modal-close');

// Botones que abren el modal
const openModalNav = document.getElementById('btn-open-modal-nav');
const openModalHero = document.getElementById('btn-open-modal-hero');
const openModalFinal = document.getElementById('btn-open-modal-final');

const affiliateTypeButtons = document.querySelectorAll('.btn-open-modal-type');

// Función para abrir el modal
function openModal() {
  modal.classList.add('show');
}

// Función para cerrar el modal
function closeModal() {
  modal.classList.remove('show');
}

// Asignación de eventos
if (openModalNav) {
  openModalNav.addEventListener('click', openModal);
}
if (openModalHero) {
  openModalHero.addEventListener('click', openModal);
}
if (openModalFinal) {
  openModalFinal.addEventListener('click', openModal);
}

affiliateTypeButtons.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

// Cierre del modal al presionar el botón de cerrar
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

// Cierre del modal al hacer click fuera del modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
