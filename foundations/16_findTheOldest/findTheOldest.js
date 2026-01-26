const findTheOldest = function(people) {
    return people.reduce((oldest, nextPerson) => {
        let oldestLastBreath = oldest, nextPersonLastBreath;
        let todayYear = new Date ().getFullYear();

        if(!oldest.yearOfDeath) {
            oldestLastBreath = todayYear;
        } else {
            oldestLastBreath = oldest.yearOfDeath;
        }
        if(!nextPerson.yearOfDeath)
        {
            nextPersonLastBreath = todayYear;
        } else {
            nextPersonLastBreath = nextPerson.yearOfDeath;
        }

        let ageOfOldest = oldestLastBreath - oldest.yearOfBirth;
        let ageOfnextPerson = nextPersonLastBreath - nextPerson.yearOfBirth;
        if( ageOfOldest < ageOfnextPerson) {
            oldest = nextPerson;
        }

        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
