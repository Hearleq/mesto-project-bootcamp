const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
editButton.addEventListener('click', openPopup);

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
const closeButton = document.querySelector('.popup__close-button');
closeButton.addEventListener('click', closePopup);

/*const title = document.querySelector('.popup__title');
const nameField = document.querySelector('.profile__name');
const activityField = document.querySelector('.profile__activity');
const saveButton = document.querySelector('.popup__save-button');
const closeButton = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('#nameInput');
const activityInput = document.querySelector('#activityInput');
const editButton = document.querySelector('.profile__edit-button');

/*const addButton = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupNewCard = document.querySelector('.popup_type_new-card');

editButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
});



addButton.addEventListener('click', function() {
  newCard.classList.add('add-place-popup_opened');
});

/*function submitButton(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const activityValue = activityInput.value;

  nameField.textContent = nameValue;
  activityField.textContent = activityValue;
  /*document.querySelector('.profile__activity').textContent = activityInput.value;
  document.querySelector('.profile__name').textContent = nameInput.value;*/

/*  popup.classList.remove('popup_opened'); /*вынести в отдельную функцию*/
/*}

saveButton.addEventListener('submit', submitButton) /*saveButton поменять на саму форму*/



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
];


/*


/* <script>
            let products =  {
                "product1" : {
                name : "Парикмахерское кресло<br>«Норм» гидравлическое",
                price : '9 900',
                },
                "product2" : {
                name : "Парикмахерское кресло<br>«Норм» гидравлическое",
                price : '9 900',
                },
                "product3" : {
                name : "Парикмахерское кресло<br>«Норм» гидравлическое",
                price : '9 900',
                },
                "product4" : {
                name : "Парикмахерское кресло<br>«Норм» гидравлическое",
                price : '9 900',
                },
            }
            
            document.getElementById('product1_name').innerHTML = products.product1.name;
            document.getElementById('product1_price').innerHTML = products.product1.price + ' &#8381';
            document.getElementById('product2_name').innerHTML = products.product2.name;
            document.getElementById('product2_price').innerHTML = products.product2.price + ' &#8381';
            document.getElementById('product3_name').innerHTML = products.product3.name;
            document.getElementById('product3_price').innerHTML = products.product3.price + ' &#8381';
            document.getElementById('product4_name').innerHTML = products.product4.name;
            document.getElementById('product4_price').innerHTML = products.product4.price + ' &#8381';
    
    
            const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
            const btn_buy = document.querySelectorAll('.btn_buy');
            
            for (i=0; i < btn_buy.length; i++) {
                btn_buy[i].onclick = function() {
                    document.getElementById('popup').classList.add('popup__open');
                    document.body.style = 'overflow: hidden';
                    document.body.style.paddingRight = paddingOffset;
                    document.getElementById('popup').addEventListener("click", function(e){
                        if (!e.target.closest ('.popup__content')){
                        document.getElementById('popup').classList.remove('popup__open');
                        document.body.style.removeProperty('overflow');
                        document.body.style.paddingRight = 0;
                    }
                })
                }
            }
            
            function popup_close() {
            document.getElementById('popup').classList.remove('popup__open');
            document.body.style.removeProperty('overflow');
            document.body.style.paddingRight = 0;
            }
    
    
        </script>*/