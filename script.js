const editarPerfil = document.querySelector('.profile__edit');
const profile = document.querySelector('.profile');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.CloseButton');
const submitSave = document.querySelector('.submit-save');
const popupForm = document.querySelector('.popup__form');
const inputName = popupForm.querySelector('.popup__form-name');
const inputExplorar = popupForm.querySelector('.popup__form-Explorar');
const profileName = document.querySelector('.profile__name');
const profileExplorer = document.querySelector('.profile__explorer');
const header = document.querySelector('.header');
const elements = document.querySelector('.elements');
const copyright = document.querySelector('.copyright');
const cards = document.querySelector('.cards');
let card = cards.querySelector('.cards__card');



editarPerfil.addEventListener('click', toggleFormDisplay)

closeButton.addEventListener('click', changeDisplayToNone )
submitSave.addEventListener('click', handleProfileFormSubmit)

function toggleFormDisplay() {
   popup.classList.toggle('popup_change_display')
   

}


function changeDisplayToNone() {
   popup.classList.remove('popup_change_display')
}

function handleProfileFormSubmit(event) {
   event.preventDefault();
   profileName.textContent =  inputName.value;
   profileExplorer.textContent = inputExplorar.value;
   inputName.value = '';
   inputExplorar.value = '';
   changeDisplayToNone();
}




/*
editarPerfil.addEventListener('click', escurecer)
function escurecer() {
   header.style.opacity = 0.4;
   profile.style.opacity = 0.4;
   cards.style.opacity = 0.4;
   copyright.style.opacity = 0.4;
}*/

/*closeButton.addEventListener('click', regular)
submitSave.addEventListener('click', regular)
function regular() {
   header.style.opacity = 'unset';
   profile.style.opacity = 'unset';
   cards.style.opacity = 'unset';
   copyright.style.opacity ='unset';
}*/










