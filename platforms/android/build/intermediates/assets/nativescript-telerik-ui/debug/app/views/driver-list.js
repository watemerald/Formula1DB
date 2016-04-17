var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;

var DriverListViewModel = require("../view-models/driver-list-view-model");

var driverList = new DriverListViewModel([]);
var pageData = new Observable({
    driverList: driverList
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;
    
    driverList.load()
    console.log("Loaded page");
};

exports.onItemClick = function(args) {
    var itemIndex = args.itemIndex;
    var itemObject = args.object;
    
    var driverTapped = driverList.getItem(itemIndex);
    
    var navigationEntry = {
        moduleName: "views/driver-details",
        context: driverTapped
    }
    
    frameModule.topmost().navigate(navigationEntry);
};

console.log("Loaded Module");