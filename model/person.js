class Person{

  constructor(name, surname, dob, gender){
   
    this.name = name;
    this.surname = surname;
    this.dob = dob;
    this.gender = gender;
    
 }

 toString(){
  const card = 'Nome: ' + this.name + '\n' +
               'Cognome: ' + this.surname + '\n' +
               'Data di nascita: ' + this.dob + '\n' +
               'Genere: ' + this.gender;
               return card;
 }
}