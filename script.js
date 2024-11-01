function showSection(sectionId) {
    const sections = ['inicio', 'descargas', 'renders', 'plugins', 'fondos', 'sonidos'];
    
    // Oculta todas las secciones y muestra solo la seleccionada
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Actualiza la URL sin recargar la página
    history.pushState({section: sectionId}, '', `/${sectionId}`);
}

// Escucha el evento de navegación para manejar los cambios de URL
window.onpopstate = function(event) {
    if (event.state && event.state.section) {
        showSection(event.state.section);
    } else {
        showSection('inicio'); // Vuelve a inicio si no hay un estado guardado
    }
};

// Carga inicial de la página según la URL
window.onload = function() {
    const currentSection = window.location.pathname.replace('/', '') || 'inicio';
    if (['inicio', 'descargas', 'renders', 'plugins', 'fondos', 'sonidos'].includes(currentSection)) {
        showSection(currentSection);
    } else {
        showSection('inicio');
    }
};
