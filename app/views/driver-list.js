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
    
    driverList.load();   
    console.log("Loaded page");
}

console.log("Loaded Module");