// Función para abrir el modal de asistencia
function openAttendanceModal(title, date) {
    const modal = document.getElementById('attendanceModal');
    const modalTitle = document.getElementById('attendanceModalTitle');
    modalTitle.textContent = `${title} (${date})`;
    modal.style.display = 'flex';
}

// Función para cerrar cualquier modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Función para guardar la asistencia verificada
function saveAttendance() {
    alert('Asistencia verificada y guardada correctamente');
    closeModal('attendanceModal');
}

// Función para crear una nueva asistencia
function createAttendance() {
    const title = document.getElementById('classTitle').value;
    const date = document.getElementById('classDate').value;
    
    if (!title || !date) {
        alert('Por favor complete todos los campos requeridos');
        return;
    }
    
    alert(`Nueva asistencia "${title}" creada. Los estudiantes ahora pueden marcar su asistencia.`);
    closeModal('createAttendanceModal');
}

// Event listener para el botón de crear asistencia
document.getElementById('createAttendanceBtn').addEventListener('click', function() {
    document.getElementById('createAttendanceModal').style.display = 'flex';
});

// Cerrar modales si se hace clic fuera de ellos
window.addEventListener('click', function(event) {
    const attendanceModal = document.getElementById('attendanceModal');
    const createAttendanceModal = document.getElementById('createAttendanceModal');
    
    if (event.target === attendanceModal) {
        closeModal('attendanceModal');
    }
    if (event.target === createAttendanceModal) {
        closeModal('createAttendanceModal');
    }
});