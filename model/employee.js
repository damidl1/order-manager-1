class Employee extends Person{
    constructor(name, surname, dob, gender, department, clients ){
     super(name, surname, dob, gender);
     this.department = department;
     this.clients = clients;
 }
}