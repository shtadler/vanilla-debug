export default class Concater {
  constructor(form) {
    this.form = form;
  }

  getFullName() {
    const name = this.form.elements.name.value;
    const surname = this.form.elements.surname.value;
    console.log(name+surname);
  }
}