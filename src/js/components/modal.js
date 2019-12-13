const popup = document.querySelector(".c-modal");
const closeModal = document.querySelector(".c-modal__close");

function showModal() {
    setTimeout(function (){
        popup.classList.remove("c-modal-remove");
        popup.classList.add("c-modal-open");
    }, 5000);
}

const removeModal = function() {
    popup.classList.remove("c-modal-open");
    popup.classList.add("c-modal-remove");
};

closeModal.addEventListener("click", removeModal, false );
popup.addEventListener("click", removeModal, false)
showModal();