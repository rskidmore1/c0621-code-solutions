/* exported student */
var student = {
  firstName: 'ryan',
  lastName: 'skidmore',
  subject: 'computer science',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
