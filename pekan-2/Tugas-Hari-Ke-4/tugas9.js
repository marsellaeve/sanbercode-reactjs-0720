//soal 1
console.log("//soal 1");
const newFunction = function literal(firstName,lastName){
    return{
        firstName, lastName,
        fullName: function(){
            console.log(firstName + " " + lastName)
            return
        }
    }
}
newFunction("William", "Imoh").fullName();

//soal 2
console.log("//soal 2");
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName,lastName,destination,occupation} = newObject;
console.log(firstName, lastName, destination, occupation);

//soal 3
console.log("//soal 3");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west,...east];
console.log(combined);