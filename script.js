const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.popup_type_profile');
const profileForm = document.querySelector('.popup__form_type_profile');
const cardPopup = document.querySelector('.popup_type_new-card');
const cardForm = document.querySelector('.popup__form_type_new-card');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const form = document.querySelector('.popup__form');
const nameInput = document.querySelector('#nameInput');
const activityInput = document.querySelector('#activityInput');
const nameField = document.querySelector('.profile__name');
const activityField = document.querySelector('.profile__activity');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
function fillProfile() {
  nameField.textContent = nameInput.value;
  activityField.textContent = activityInput.value;
}
function fillProfileInput() {
  nameInput.value = nameField.textContent;
  activityInput.value = activityField.textContent;
  openPopup(profilePopup);
}
editButton.addEventListener('click', fillProfileInput);
profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  fillProfile();
  closePopup(profilePopup);
});

addButton.addEventListener('click', function () {
  openPopup(cardPopup);
});


closeButton.addEventListener('click', closePopup);




/*const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const profileForm = document.querySelector('popup__form_type_profile');
const nameInput = document.querySelector('#nameInput');
const activityInput = document.querySelector('#activityInput');
const newPlaceInput = document.querySelector('#newPlaceInput');
const linkInput = document.querySelector('#linkInput');
const nameValue = nameInput.value;
const activityValue = activityInput.value;
const newPlaceValue = newPlaceInput.value;
const linkValue = linkInput.value;
const title = document.querySelector('.popup__title');
const nameField = document.querySelector('.profile__name');
const activityField = document.querySelector('.profile__activity');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_new-card');

*/

/*
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];*/