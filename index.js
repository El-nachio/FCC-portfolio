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
/**************************************************************here change the projects*****************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    let hrefs = [
        'https://codepen.io/el-nachio/full/JjpEPZR',
        'https://codepen.io/el-nachio/full/YzJewWp',
        'https://codepen.io/el-nachio/full/xxyQpLq',
        'https://codepen.io/el-nachio/full/RwJQGOZ',
        'https://codepen.io/el-nachio/full/poqomyV',
        'https://codepen.io/el-nachio/full/xxayjjw',
    ]
    let imgProy = [
        'projects-pic/Captura de pantalla 2023-08-22 202132.png',
        'projects-pic/Captura de pantalla 2023-08-22 202609.png',
        'projects-pic/Captura de pantalla 2023-08-22 202634.png',
        'projects-pic/Captura de pantalla 2023-08-22 202712.png',
        'projects-pic/Captura de pantalla 2023-08-23 192141.png',
        'projects-pic/Captura de pantalla 2023-08-23 192238.png',
    ]
    let toChange = [
        document.getElementById('proyect-link'),
        document.getElementById('projetc-img'),
        document.getElementById('description'),
    ]
    let descriptions = [
        'This HTML code represents a personal web page for Taborda Ignacio, a Front-End Developer. The page includes sections for navigation, presentation, projects, and contact information.',
        'This React-based app, called "Machine," displays random inspirational quotes and allows users to refresh the quote and change the background color. It also provides a Twitter share option.',
        'The "Calculator" app is a user-friendly tool for performing basic math operations, including addition, subtraction, multiplication, and division. It also handles decimal input and offers a clear button (AC) for easy correction. The app is designed to provide real-time feedback and gracefully handle syntax errors. Its a handy tool for quick and accurate calculations.',
        'This virtual keyboard is a user interface element designed to mimic the functionality of a physical keyboard. It provides a range of keys, including alphanumeric, function keys (F1-F12), control keys (CTRL, ALT), and special keys (TAB, BACKSPACE, CAPS, SHIFT, ENTER, SPACE, ESC). The keyboard is an essential component for input on various devices and applications, offering a convenient and intuitive way to interact with digital content.',
        'The Pomodoro Timer is a web application designed to boost productivity through time management. It uses the Pomodoro Technique, breaking work into focused intervals and short breaks. Key features include customizable session and break durations, audio alerts, countdown displays, and responsive design. Created by web developer Ignacio Taborda, it helps users stay organized and motivated.',
        'This HTML code represents an educational application that explores and teaches various branches of mathematics and the scientific method. The application is organized into sections that provide detailed information on topics such as algebra, calculus, arithmetic, logic, logic gates, and scientific models. Users can easily navigate through these topics using the navigation bar. Each section contains relevant educational content and useful links.',
    ]
    let cont = 0
    function presentation() { 
        setTimeout(function () {
            // Cambiar los elementos después de la eliminación de la animación
            toChange[0].href = hrefs[cont];
            toChange[1].src = imgProy[cont];
            toChange[2].innerHTML = descriptions[cont];
            
            // Agregar una animación de aparición después de cambiar los elementos
            toChange[0].classList.remove('project-fade');
            toChange[0].classList.add('project-fade-in');
            
            // Usar setTimeout nuevamente para eliminar la clase de animación de aparición después de un tiempo
            setTimeout(function () {
                toChange[0].classList.remove('project-fade-in');
            }, 500); // 500 ms, ajusta esto según la duración de tu animación CSS
        }, 500); // 500 ms, ajusta esto según la duración de tu animación CSS
    }
    let leftButton = document.getElementById('left-button').addEventListener('click', function() {
        if (cont < hrefs.length - 1) {
            cont++;
            toChange[0].classList.add('project-fade');
            presentation()
        }
    })
    let right = document.getElementById('right-button').addEventListener('click', function() {
        if(cont > 0) {
            cont--
            toChange[0].classList.add('project-fade');
            presentation()
        }
    })
});
/*********************************************from submit*************************************************************/
