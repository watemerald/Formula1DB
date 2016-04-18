var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;

var ConstructorStandingsListViewModel = require("../view-models/constructor-champions-list-view-model");

var standingsList = new ConstructorStandingsListViewModel([]);
var pageData = new Observable({
    standingsList: standingsList
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;
    
    standingsList.load()

    console.log("Loaded page");
}

console.log("Loaded Module");