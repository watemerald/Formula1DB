var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");

exports.getDrivers = function() {
  console.log("Getting all drivers");
  
  frameModule.topmost().navigate("views/driver-list");  
};

exports.getConstructors = function() {
    console.log("Getting all constructors");
    
    frameModule.topmost().navigate("views/constructor-list");
};

exports.getSeasons = function() {
    console.log("Getting all seasons");
    
    frameModule.topmost().navigate("views/season-list");
};

exports.getDriverChampions = function() {
    console.log("Getting all driver champions");
    
    frameModule.topmost().navigate("views/driver-champions-list");
};

exports.getConstructorChampions = function() {
  console.log("Getting all constructor champions");
    
  frameModule.topmost().navigate("views/constructor-champions-list");
};

// exports.getDriverDetails = function() {
//     frameModule.topmost().navigate("views/driver-details");
// }