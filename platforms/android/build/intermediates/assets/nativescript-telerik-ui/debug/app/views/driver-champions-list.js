var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;

var DriverStandingsListViewModel = require("../view-models/driver-champions-list-view-model");

var standingsList = new DriverStandingsListViewModel([]);
var pageData = new Observable({
    standingsList: standingsList
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;
    
    standingsList.load()
    // console.log(standingsList[0]);    
    console.log("Loaded page");
}

console.log("Loaded Module");