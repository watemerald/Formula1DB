var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;

var DriverDetailsViewModel = require("../view-models/driver-details-view-model");

// var driverList = new DriverListViewModel([]);
// var pageData = new Observable({
//     driverList: driverList
// });

var driverDetails;
var pageData;

exports.loaded = function(args) {
    var page = args.object;
    
    var driverId = page.navigationContext.driverId;
    
    driverDetails = DriverDetailsViewModel(driverId);
    
    driverDetails.load();
    
    page.bindingContext = driverDetails;
};