function showSection(sectionId) {
    const sections = ['inicio', 'descargas', 'renders', 'plugins', 'fondos', 'sonidos'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
