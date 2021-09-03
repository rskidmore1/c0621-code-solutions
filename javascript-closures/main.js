function graduate(credential) {
  function name(fullName) {
    return fullName + ', ' + credential;
  }
  return name;
}

const medicalSchool = graduate('M.D.');

const lawSchool = graduate('Esq.');

console.log(medicalSchool('Dan Abramov'));
console.log(lawSchool('Ryan Florence'));
