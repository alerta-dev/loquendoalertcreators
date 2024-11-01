function showSection(sectionId) {
    const sections = ['inicio', 'descargas', 'materiales', 'renders', 'fondos', 'sonidos', 'plugins'];

if (!sections.includes(sectionId)) {
        sectionId = 'inicio'; // Muestra "inicio" si el ID no es válido
    }

// Carga inicial de la página según la URL
window.onload = function() {
    const currentSection = window.location.pathname.replace('/', '') || 'inicio';
    showSection(currentSection);
};

    
    // Si se selecciona "Materiales", no oculta las subcategorías
    if (sectionId === 'materiales') {
        document.getElementById('renders').classList.remove('hidden');
        document.getElementById('fondos').classList.remove('hidden');
        document.getElementById('sonidos').classList.remove('hidden');
    } else {
        // Oculta todas las secciones
        sections.forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });
        // Muestra la sección seleccionada
        document.getElementById(sectionId).classList.remove('hidden');
    }
    
    // Actualiza la URL sin recargar la página
    history.pushState({section: sectionId}, '', `/${sectionId}`);
}

// Escucha el evento de retroceso del navegador
window.onpopstate = function(event) {
    if (event.state && event.state.section) {
        showSection(event.state.section);
    } else {
        showSection('inicio'); // Vuelve a "inicio" si no hay un estado guardado
    }
};

