const pet = {
    name: 'Mikki',
    color: 'Brown',
    age: 4
};

const { name: petName, color: petColro, age: petAge } = pet;

console.log(`My ${petAge} yo pet's name is ${petName} and she's ${petColor}.`);