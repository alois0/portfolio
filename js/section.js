function showSection(sectionID) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionID).classList.remove('hidden');
}

function showView(viewID) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.add('hidden'));
    document.getElementById(viewID).classList.remove('hidden');
}