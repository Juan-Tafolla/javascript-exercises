let Titles = [];
const getTheTitles = function getTheTitles(titleObject) {

        Titles = titleObject.map(function(obj){
            return obj.title
        });
    
    return Titles;
};

// Do not edit below this line
module.exports = getTheTitles;
