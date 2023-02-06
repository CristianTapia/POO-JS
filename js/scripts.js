import patientListA from './patientsList.js';
import Patient from './patientConstructor.js';

// Usar constructor para devolver array con info de todos los pacientes
let objList = function patientsObj(patient) {
  return new Patient(patient.name, patient.age, patient.rut, patient.diagnosis);
}

// Prototipo para consultorios
function Surgery(name, patients) {
  this.name = name;
  this.patients = patients;
}

Surgery.prototype.getName = function () {
  return this.name;
}

Surgery.prototype.getPatients = function () {
  return this.patients;
}

const patientArray = patientListA.map(objList);
const surgeryA = new Surgery('Consultorio A', patientArray);
const surgeryB = new Surgery('Consultorio B', patientArray);

// Mostrar la info en pantalla cuando se clickeen los botones
let allPatients = document.getElementById("display-all");
allPatients.addEventListener("click", getAllPatients);

function getAllPatients() {

  function buildListadoPacientes (patients) {
      return patients.map(divBox)
  }

  function divBox(patient) {
  return `
      <div>
          <p><b>Nombre:</b> ${patient.name}</p>
          <p><b>Edad:</b> ${patient.age}</p>
          <p><b>Rut:</b> ${patient.rut}</p>
          <p><b>Diagnóstico:</b> ${patient.diagnosis}</p>
      </div>
      `;
  }

  document.getElementById('patients').innerHTML = `${buildListadoPacientes(surgeryA.getPatients())}`;
  document.getElementById('patients').innerHTML = `${buildListadoPacientes(surgeryB.getPatients())}`;

}

// // /******************************************
// // *               2nd method                *
// // ******************************************/

// // Display all patients data
// function Patient(name, age, rut, diagnosis) {
//   this.name = name;
//   this.age = age;
//   this.rut = rut;
//   this.diagnosis = diagnosis;
// }

// const patient1 = new Patient("Cristian", 20, "14.556.555-8", "Cancer");
// const patient2 = new Patient("Pedro", 25, "24.532.015-1", "Diabetes");
// const patient3 = new Patient("Juan", 23, "10.596.333-7", "Apéndice");
// const patient4 = new Patient("Diego", 50, "14.556.555-8", "Fractura");
// Patient.prototype.getPatientName = function () {
//   return this.name;
// };

// Patient.prototype.getPatientAge = function () {
//   return this.age;
// };

// Patient.prototype.getPatientRut = function () {
//   return this.rut;
// };

// Patient.prototype.getPatientDiagnosis = function () {
//   return this.diagnosis;
// };

// var patients = document.getElementById("patients");
// let allPatients = document.getElementById("display-all");
// allPatients.addEventListener("click", getAllPatients);

// function getAllPatients() {
  
//   patients.innerHTML += `
//     <div id="patients">
//     <br>
//     <div>${array[0].getPatientName()}</div>
//     <div>${array[1].getPatientName()}</div>
//     <div>${array[2].getPatientName()}</div>
//     <div>${array[3].getPatientName()}</div>
//     </div>`;
// }







