var btnMenu = document.querySelector('.mt-menu__btn');
var closeModal = document.querySelectorAll('.close-modal');
var modal = document.querySelector('.modal');
btnMenu.onclick = function(){
    btnMenu.nextElementSibling.style.display = 'block';
}

closeModal.forEach(item =>{
    item.onclick = function(){
        modal.style.display = 'none';
    }
})