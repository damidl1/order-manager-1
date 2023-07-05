class Client extends Person {

  constructor(name, surname, dob, gender, address, orders){
    super(name, surname, dob, gender);
     this.address = address;
     this.orders = orders;
  }

  totalExpenses(orderArray){
    return orderArray.reduce((acc, curr) => acc + curr, 0);
  }

  toString(){
    const card = super.toString() +
         'Indirizzo: ' + this.address + '\n' +
         'Ordini: ' + this.orders;
         return card;
  }

}