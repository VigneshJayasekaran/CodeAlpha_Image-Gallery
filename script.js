function openModal(imgId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var caption = document.getElementById("caption");
    var img = document.getElementById(imgId);
    modalImg.src = img.src;
    caption.innerHTML = img.alt;

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}