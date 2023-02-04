// /******************************************
// *               1st method                *
// ******************************************/

// // Llamar al archivo JSON con los pacientes
// fetch('js/data.json')
//   .then((response) => response.json())
//   .then((data) => showInfo(data));

// function showInfo(data) {
//   var patient = data.patient;
//   let surgery = data.surgery;
//   console.log('Pacientes', patient);
//   console.log('Consultorios', surgery);

//   let showAllPatients = document.getElementById('display-all');
//   showAllPatients.addEventListener('click', displayInfo);
//   function displayInfo() {
//     for (let i = 0; i < patient.length; i++) {
//       let patientData = patient[i];

//       console.log(patientData)
    
//     }
//   }
// }




// Patient.prototype.information = function() {
// const patients = document.getElementById('patients');
// patients.innerHTML +=
//     `<div id="patients">
//     <br>
//     <div>${this.name}</div>
//     <div>${this.age}</div>
//     <div>${this.rut}</div>
//     <div>${this.diagnosis}</div>
//     </div>`;
// console.log(`${this.name}`)
// console.log(`${this.age}`)
// console.log(`${this.rut}`)
// console.log(`${this.diagnosis}`)
// }

//   paciente.forEach((element) => {
//     let persona = new Patient(
//       element.name,
//       element.age,
//       element.rut,
//       element.diagnosis
//     );
//   });
// }

/******************************************
*               2nd method                *
******************************************/

// Display all patients data
function Patient(name, age, rut, diagnosis) {
  this.name = name;
  this.age = age;
  this.rut = rut;
  this.diagnosis = diagnosis;
}

const patient1 = new Patient("Cristian", 20, "14.556.555-8", "Cancer");
const patient2 = new Patient("Pedro", 25, "24.532.015-1", "Diabetes");
const patient3 = new Patient("Juan", 23, "10.596.333-7", "Apéndice");
const patient4 = new Patient("Diego", 50, "14.556.555-8", "Fractura");

Patient.prototype.information = function () {
  patients.innerHTML += `
    <div id="patients">
    <br>
    <div>${this.name}</div>
    <div>${this.age}</div>
    <div>${this.rut}</div>
    <div>${this.diagnosis}</div>
    </div>`;
};

var patients = document.getElementById("patients");
let allPatients = document.getElementById("display-all");
allPatients.addEventListener("click", getAllPatients);

function getAllPatients() {
  patient1.information();
  patient2.information();
  patient3.information();
  patient4.information();
}