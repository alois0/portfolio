function showModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'block';
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
    if (event.target.id === id) { 
        closeModal(id);
    }
}

// function rightClickClose(event, id) {
//     event.preventDefault();
//     closeModal(id);
// }

function closeOnEscape(event, id) {
    if (event.keyCode === 27) { 
        closeModal(id);
    }
}