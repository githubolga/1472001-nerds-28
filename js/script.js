var buttonOpen = document.querySelector(".js-modal-open");
var modal = document.querySelector(".js-modal");
var buttonClose = modal.querySelector(".js-modal-close");
var modalForm = modal.querySelector(".js-form");
var formName = modalForm.querySelector(".js-name");
var formEmail = modalForm.querySelector(".js-email");
var formText = modalForm.querySelector(".js-text");
var mapWrapper = document.querySelector(".js-map");


buttonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("md-show");
  formName.focus();
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
 	if (modal.classList.contains("md-show")) {
		modal.classList.remove("md-show");
	}
});

modalForm.addEventListener("submit", function (evt) {
  if (!formName.value || !formEmail.value || !formText.value) {
    evt.preventDefault(); 
    modal.classList.add("md-error");
    setTimeout(function() {
			modal.classList.remove("md-error");
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

ymaps.ready(map);

function map () {
	mapWrapper.classList.add("map-show");
  
  var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
    	zoom: 16, 
      controls: ["zoomControl"]
  }); 
  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: "Nerds 191186, Санкт-Петербург, ул. Б.Конюшенная, д.19/8"
  }, {
    iconLayout: "default#image",
    iconImageHref: "./img/map-marker.png",
    iconImageSize: [231, 190]
  });
  myMap.behaviors.disable("scrollZoom");
  myMap.geoObjects.add(myPlacemark);
}


