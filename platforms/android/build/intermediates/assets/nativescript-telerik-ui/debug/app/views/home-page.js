var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");

exports.getDrivers = function() {
  console.log("Getting all drivers");
  
  frameModule.topmost().navigate("views/driver-list");  
};

exports.getConstructors = function() {
//   dialogsModule.alert({
//     message: "Not implemented yet",
//     okButtonText: "OK"
//   });
    console.log("Getting all constructors");
    
    frameModule.topmost().navigate("views/constructor-list");
};

exports.getSeasons = function() {
    dialogsModule.alert({
        message: "Not implemented yet",
        okButtonText: "OK"
    });
};

exports.getDriverChampions = function() {
  dialogsModule.alert({
    message: "Not implemented yet",
    okButtonText: "OK"
  });
};

exports.getConstructorChampions = function() {
  dialogsModule.alert({
    message: "Not implemented yet",
    okButtonText: "OK"
  });
};
