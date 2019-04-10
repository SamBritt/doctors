const createDoctorObj = (name, specialty, address) => {
    return  {
        "doctorName": name,
        "specialty": specialty,
        "address": address
    }
}
console.log(createDoctorObj("Bruce Richards", "Primary Care", "300 21st Ave S."))
const BowWowKennels = [];

const createPetObj = (name, breed) => {
    return {
        "petName": name,
        "petBreed": breed
    }
}
BowWowKennels.push(createPetObj("Oliver", "Min-Pin"), createPetObj("Wookie", "Mut"), createPetObj("Maddie", "Pitbull"));
console.log(BowWowKennels)