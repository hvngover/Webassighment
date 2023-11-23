function displayProject(projectId) {
    // Update the modal elements with project details
    const project = projects[projectId];
    if (project) {
        const modalImage = document.getElementById('modal-image');
        modalImage.src = project.image;

        const modal = document.querySelector('.modal');
        modal.style.display = 'block';

        const modalTitle = document.getElementById('modal-title');
        modalTitle.textContent = project.title;

        const modalDescription = document.getElementById('modal-description');
        modalDescription.textContent = project.description;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const listGroupItems = document.querySelectorAll('.list-group-item');
    listGroupItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgPath = item.getAttribute('data-img');
            displayProject(item.getAttribute('id'));
        });
    });

    // Hide the modal when clicked outside the image
    const modal = document.querySelector('.modal');
    modal.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            modal.style.display = 'none';
        }
    });
});