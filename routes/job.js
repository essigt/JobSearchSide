var titles = ["Software Engineer", "Firefighter", "Software Architect", "Teacher", "Big Boss"];
var locations = ["Karlsruhe", "Karlsruhe-Mühlburg", "Karlsruhe-Süd", "Karlsruhe-Reinhafen", "Eppingen", "San Francisco", "Sydney"];

/**

*/
exports.list = function(req, res){
  res.send("all jobs");
};


function generateJobs(min, max) {
    // Generate some Random Jobs
    var generatedList = new Array();    
    var num = (Math.random()*(max-min))+min; //A number between min and max
    
    for(var i=0; i < num; i++) {
        var titleId = Math.round(Math.random()* (titles.length-1));
        var locationId = Math.round(Math.random()* (locations.length-1));
        
        generatedList.push({title: titles[titleId], location: locations[locationId]});    
    }
    
    return generatedList;
}

/**

*/
exports.search = function(req, res) {    
    var title = req.params.title;
    var location = req.params.location;
    
    
    //TODO: Actualy search jobs
    res.send( generateJobs(4,20) );    
}