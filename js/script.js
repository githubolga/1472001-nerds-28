var buttonOpen = document.querySelector(".js-modal-open");
var modal = document.querySelector(".js-modal");
var buttonClose = modal.querySelector(".js-modal-close");
var modalForm = modal.querySelector(".js-form");
var formName = modalForm.querySelector(".js-name");
var formEmail = modalForm.querySelector(".js-email");
var formText = modalForm.querySelector(".js-text");

buttonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("md-show");
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
 	if (modal.classList.contains("md-show")) {
		modal.classList.remove("md-show");
	}
});

modalForm.addEventListener("submit", function (evt) {
	cosole.log(formName.value, formEmail.value, formText.value);
  if (!formName.value || !formEmail.value || !formText.value) {
    evt.preventDefault(); 
    modal.classList.add("md-error");
    setTimeout(() => {
			modal.classList.remove('md-error');
		}, 2000);
  } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("md-show")) {
      evt.preventDefault();
      modal.classList.remove("md-show");
      modal.classList.remove("md-error");
    }
  }
});

