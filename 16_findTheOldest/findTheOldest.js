const findTheOldest = function(peopleObjects) {
    let oldestPerson = {
        name: "Dummy",
        yearOfDeath: 0,
        yearOfBirth: 0
    };
    for (let person of peopleObjects) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear()
            console.log(person);
            console.log(person.yearOfDeath);
        }
        
        let age = person.yearOfDeath - person.yearOfBirth;
        
        
        
        let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        
        
        if (age > oldestAge) {
            oldestPerson = person;
        }
    }
    return oldestPerson;
};



const people = [
    {
    name: "Carly",
    yearOfBirth: 1066,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
