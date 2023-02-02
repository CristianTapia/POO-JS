// Llamar al archivo JSON con los pacientes
fetch('js/pacientes.json')
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data) {
console.log('Consultorio', data.consultorio);
console.log('Paciente', data.paciente);
}

let paciente = document.getElementById("paciente");
for (i = 0; i < paciente.length; i++) {
    
}