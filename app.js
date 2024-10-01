
let user = {
    name: "Cakal",
    surname: "Emirhan",
    gender: "male",
    age: "23" ,

    setAge(newAge) {
        this.age = newAge;
    },

    getYearsBeforeRetirement() {
        const retirementAge = 65;
        return retirementAge - this.age;
    }
};

console.log("İlk yaş: " + user.age); 

user.setAge(10);
console.log("Yeni yaş: " + user.age); 

let yearsBeforeRetirement = user.getYearsBeforeRetirement();
console.log("Pensiyaya qalan illər: " + yearsBeforeRetirement); 