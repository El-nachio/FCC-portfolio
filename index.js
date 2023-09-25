// funcion creada con chatgtp no sabia como encararla
document.addEventListener('DOMContentLoaded', function () {
    const centeredSection = document.querySelector('.info-contact');
    const showSectionButton = document.getElementById('links');

    function handleClick() {
        centeredSection.classList.remove('none');
        centeredSection.style.display = 'flex';
    }

    // Agrega la función handleClick al objeto window para que pueda ser llamada desde el atributo onclick del botón
    window.handleClick = handleClick;

    // Cierra la sección cuando se hace clic fuera de ella
    document.addEventListener('click', (event) => {
        if (!centeredSection.contains(event.target) && event.target !== showSectionButton) {
            centeredSection.style.display = 'none';
        }
    });

    // Evita que el clic en el botón cierre la sección
    showSectionButton.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

function proyectSelector() {
    let leftButton = document.getElementById('left-button')
    let right = document.getElementById('right-button')
}