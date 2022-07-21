let Names = [];
let Ages = [];
let result;
const year = new Date();
const findTheOldest = function findTheOldest(people) {
    
    for (let i = 0; i < people.length; i++) {

          if (people[i].yearOfDeath == undefined ) {
            
             Ages[i] = (year.getFullYear() - people[i].yearOfBirth);

          } else {
            
            Ages[i] = (people[i].yearOfDeath - people[i].yearOfBirth);

          }
    }

     let max = Ages.reduce(function(a,b){
        return Math.max(a,b);
     }, -Infinity);
    
    let idx = Ages.indexOf(max);
    people = people.splice(idx,1);
    people = people[0];
    return people;
};


// Do not edit below this line
module.exports = findTheOldest;
