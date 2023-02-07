import {patientListA, patientListB} from './patientsList.js';
import Patient from './patientConstructor.js';
import Surgery from './surgeryConstructor.js';

// Devolver array con info de todos los pacientes
let objList = function patientsObj(patient) {
  return new Patient(patient.name, patient.age, patient.rut, patient.diagnosis);
}

// Array para distintos consultorios
const patientArrayA = patientListA.map(objList);
const patientArrayB = patientListB.map(objList);

// Obtener pacientes de distintos consultorios
const surgeryA = new Surgery('Consultorio A', patientArrayA);
const surgeryB = new Surgery('Consultorio B', patientArrayB);

// Mostrar la info en pantalla cuando se clickeen los botones
let allPatients = document.getElementsByClassName('display-patients');
for (let i = 0; i < allPatients.length; i++) {
  let buttons = allPatients[i];
  buttons.addEventListener('click', getPatients);
}

function getPatients(event) {
  let buttonClicked = event.target;

  function buildListadoPacientes (patients) {
    return patients.map(divContent)
  }

  function divContent(patient) {
  return `
      <div>
          <p><b>Nombre:</b> ${patient.name}</p>
          <p><b>Edad:</b> ${patient.age}</p>
          <p><b>Rut:</b> ${patient.rut}</p>
          <p><b>Diagnóstico:</b> ${patient.diagnosis}</p>
      </div>
      `;
  }

  if (buttonClicked.innerText == 'Mostrar todos') {
    document.getElementById('patients').innerHTML = `${buildListadoPacientes(surgeryA.getPatients())}
                                                      ${buildListadoPacientes(surgeryB.getPatients())}`;
  } if (buttonClicked.innerText == 'Mostrar Consultorio B') {
    document.getElementById('patients').innerHTML = `${buildListadoPacientes(surgeryB.getPatients())}`;
  } if (buttonClicked.innerText == 'Mostrar Consultorio A') {
    document.getElementById('patients').innerHTML = `${buildListadoPacientes(surgeryA.getPatients())}`;
  } if (buttonClicked.innerText == 'Buscar paciente') {
    let searchInputA = document.getElementById('search-boxA');
    let searchInputB = document.getElementById('search-boxB');
    let resultA = patientArrayA.find((item) => item.name === searchInputA.value);
    let resultB = patientArrayB.find((item) => item.name === searchInputB.value);
    document.getElementById('patients').innerHTML = `${divContent(resultA)}`;
    document.getElementById('patients').innerHTML = `${divContent(resultB)}`;
  }
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

// const patient1 = new Patient('Cristian', 20, '14.556.555-8', 'Cancer');
// const patient2 = new Patient('Pedro', 25, '24.532.015-1', 'Diabetes');
// const patient3 = new Patient('Juan', 23, '10.596.333-7', 'Apéndice');
// const patient4 = new Patient('Diego', 50, '14.556.555-8', 'Fractura');
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

// var patients = document.getElementById('patients');
// let allPatients = document.getElementById('display-all');
// allPatients.addEventListener('click', getAllPatients);

// function getAllPatients() {
  
//   patients.innerHTML += `
//     <div id='patients'>
//     <br>
//     <div>${array[0].getPatientName()}</div>
//     <div>${array[1].getPatientName()}</div>
//     <div>${array[2].getPatientName()}</div>
//     <div>${array[3].getPatientName()}</div>
//     </div>`;
// }







