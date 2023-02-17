var popupBtn = document.querySelector ('.btnjs');
var popupForm = document.querySelector ('.contact-us_wrapper')
var popupOverlay = document.querySelector ('.popup_overlay')
var popupClose = document.querySelector ('.form_btn-closejs')
var input = popupForm.querySelector ('input')


popupBtn.addEventListener ('click',function() {
    popupForm .classList.add ('popup-open');
    popupOverlay.classList.add ('popup_overlay-open');
    input.focus()
})

popupClose.addEventListener ('click',function() {
    popupForm .classList.remove ('popup-open');
    popupOverlay.classList.remove ('popup_overlay-open');
    
})

window.addEventListener('keydown', function(evt) {
    if ( evt.key === 'Escape')
    popupForm .classList.remove ('popup-open');
    popupOverlay.classList.remove ('popup_overlay-open');
}
)
    

