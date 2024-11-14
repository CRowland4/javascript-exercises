const findTheOldest = function(people) {
    const date = new Date();
    const currentYear = date.getFullYear();

    let oldest = people[0];
    oldestAge = getPersonAge(oldest, currentYear);

    for (const person of people) {
        const personAge = getPersonAge(person, currentYear);
        if (personAge > oldestAge) {
            oldest = person;
            oldestAge = personAge;
        }
    }

    return oldest;
};


function getPersonAge(person, currentYear) {
    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return currentYear - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
