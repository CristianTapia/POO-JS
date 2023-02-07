// Prototipo para consultorios
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

export default Surgery;
