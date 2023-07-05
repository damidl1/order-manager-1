class Client extends Person {

  constructor(name, surname, dob, gender, address, orders){
    super(name, surname, dob, gender);
     this.address = address;
     this.orders = orders;
  }

}