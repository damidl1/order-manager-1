class Employee extends Person{
    constructor(name, surname, dob, gender, department, clients ){
     super(name, surname, dob, gender);
     this.department = department;
     this.clients = clients;
 }

  toString(){
   const card = super.toString() +
     'Dipartimento: ' + this.department + '\n' +
     'Clienti: ' + this.clients;
     return card;
  }
}