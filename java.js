const lists = document.querySelectorAll('.list');
const dropzones = document.querySelectorAll('.dropzone');
let draggedItem = null;

lists.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = item;
        setTimeout(() => item.style.display = 'none', 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });
});

dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => e.preventDefault());

    zone.addEventListener('drop', () => {
        if (draggedItem) {
            zone.appendChild(draggedItem);
        }
    });
});
