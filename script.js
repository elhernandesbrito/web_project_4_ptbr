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
const page = document.querySelector('.page');


editarPerfil.addEventListener('click', toggleFormDisplay)
closeButton.addEventListener('click', changeDisplayToNone )
submitSave.addEventListener('click', handleProfileFormSubmit)
page.addEventListener(escureceTela)

function toggleFormDisplay() {
   popup.classList.toggle('popup_change_display')
   function escureceTela() {
      page.style.opacity=0.2;
   }
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


















/*buttonEdit.addEventListener('click', () =>{
   popup.style.display = 'block'
})

popup.addEventListener('click', event => {
   const classNameOfClickedElement = event.target.classList
   console.log(classNameOfClickedElement)
})

buttonClose.addEventListener('click', () => {
   popup.style.display='none'
}) */



// Vamos encontrar o formulário no DOM
// let formElement = // Use o método querySelector()

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz

//function handleProfileFormSubmit(evt) {
    // Esta linha impede o navegador 
    // de enviar o formulário da forma padrão.
 //   evt.preventDefault();
    // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
    // Explicaremos em mais detalhes posteriormente.

    // Vamos encontrar os campos de formulário do DOM
  //  let nameInput = // Use querySelector()
 //   let jobInput = // Use querySelector()

    // Pegue os valores de cada campo do valor da propriedade correspondente

    // Selecione os elementos aos quais os valores dos campos serão inseridos

    // Insira novos valores usando a
    // propriedade textContent
//}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
//formElement.addEventListener('submit', handleProfileFormSubmit); 