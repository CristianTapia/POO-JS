function Patient (name, age, rut, diagnosis) {
    this.name = name;
    this.age = age;
    this.rut = rut;
    this.diagnosis = diagnosis;
}

// Usar constructor para devolver array con info de todos los pacientes
let objList = function patientsObj(patient) {
    return new Patient(patient.name, patient.age, patient.rut, patient.diagnosis)
}

function Surgery(name, patients) {
    this.name = name;
    this.patients = patients;
  }

  Surgery.prototype.getName = function () {
    return this.name;
  };
  
  Surgery.prototype.getPatients = function () {
    return this.patients;
  }; 
  

const patientListA = [
    {
      name: "Cristian",
      age: 24,
      rut: "24.532.015-1",
      diagnosis: "Cáncer",
    },
    {
      name: "Pedro",
      age: 25,
      rut: "25.666.156-9",
      diagnosis: "Apéndice",
    },
    {
      name: "Juan",
      age: 90,
      rut: "10.596.333-7",
      diagnosis: "Diabetes",
    },
    {
      name: "Diego",
      age: 50,
      rut: "12.334.222-3",
      diagnosis: "Fractura",
    },
];

const patientArray = patientListA.map(objList);

console.log(patientArray)

const surgeryCheck = new Surgery('Consultorio A', patientArray);

// Mostrar la info en pantalla cuando se clickeen los botones
var patients = document.getElementById("patients");
let allPatients = document.getElementById("display-all");
allPatients.addEventListener("click", getAllPatients);

function getAllPatients() {

    // function buildListadoPacientes (patients) {
    //     return patients.map
    // }



    const buildListadoPacientes = (patients) => {
        return patients.map((patient)=>{
          return `
            <div>
              <p><b>Nombre:</b> ${patient.name}</p>
              <p><b>Edad:</b> ${patient.age}</p>
              <p><b>Rut:</b> ${patient.rut}</p>
              <p><b>Diagnóstico:</b> ${patient.diagnosis}</p>
            </div>
          `;
        });
      }
      document.getElementById('patients').innerHTML = `${buildListadoPacientes(surgeryCheck.getPatients())}`;
}