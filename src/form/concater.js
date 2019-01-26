export default class Concater {
  constructor(form) {
    this.form = form;
  }

  // get concat name and surname from form if it user form
  getFullName() {
    if(this.someChecker()) {
      const name = this.form.elements.name.value;
      const surname = this.form.elements.surname.value;
      console.log(name + surname);
    } else {
      console.log('not user form, sorry :(');
    }
  }

  // some action with error, debug fixing
  someChecker() {
    return this.form.classList.value.indexOf('user-form');
  }
}