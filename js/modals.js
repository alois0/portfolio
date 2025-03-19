function showModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'block'; // Show the modal
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
    }, 300);
}

function outsideClick(event, id) {
    if (event.target.id === id) { // Only close if clicking outside modal-content
        closeModal(id);
    }
}

// function rightClickClose(event, id) {
//     event.preventDefault(); // Prevent the default right-click menu
//     closeModal(id);
// }

function closeOnEscape(event, id) {
    if (event.keyCode === 27) { // 27 is the escape key
        closeModal(id);
    }
}