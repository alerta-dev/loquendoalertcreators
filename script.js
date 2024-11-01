function showSection(sectionId) {
    const sections = ['inicio', 'descargas', 'renders', 'plugins', 'fondos', 'sonidos'];
    
    // Asegúrate de que el ID proporcionado sea válido
    if (!sections.includes(sectionId)) {
        sectionId = 'inicio'; // Muestra "inicio" si el ID no es válido
    }
    
    // Oculta todas las secciones excepto la seleccionada
    sections.forEach(id => {
        document.getElementById(id).classList.toggle('hidden', id !== sectionId);
    });
    
    // Actualiza la URL sin recargar la página
    history.pushState({section: sectionId}, '', `/${sectionId}`);
}

// Escucha el evento de navegación para manejar los cambios de URL
window.onpopstate = function(event) {
    if (event.state && event.state.section) {
        showSection(event.state.section);
    } else {
        showSection('inicio'); // Vuelve a "inicio" si no hay un estado guardado
    }
};

// Carga inicial de la página según la URL
window.onload = function() {
    const currentSection = window.location.pathname.replace('/', '') || 'inicio';
    showSection(currentSection);
};
