console.log("ESERCIZIO 1")

class user {
    constructor(firstName,lastName,age,location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    majorAge(ageToCompare) {
     
        return this.age > ageToCompare.age ? `L'età di ${this.firstName} è maggiore dell' età di ${ageToCompare.firstName}` : `L'età di  ${ageToCompare.firstName} è maggiore dell' età di ${this.firstName}`;
      }
    


}

const persona1= new user ("Francesco","Malafronte",19,"Gragnano")
console.log(persona1)

const persona2= new user ("Davide","Malafronte",16,"Gragnano")
console.log(persona2)

const persona3= new user ("Caterina","Malafronte",43,"Gragnano")
console.log(persona2)

const persona4= new user ("Leandro","Malafronte",44,"Gragnano")
console.log(persona2)



console.log(persona1.majorAge(persona2));
console.log(persona3.majorAge(persona4));


console.log("ESERCIZIO 2")
const pets = [];

document.getElementById("form").addEventListener('submit', function(event){
event.preventDefault();



    let pet = {
        petName: document.getElementById("name").value,
        ownerName: document.getElementById("padrone").value,
        species: document.getElementById("specie").value,
        petName: document.getElementById("razza").value,
   
    }

    pets.push(pet);

    if(pets[0].ownerName === pets[1].ownerName){
        console.log("TRUE");
    }else{
        console.log("FALSE");
    }
})
console.log(pets);



