var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;

var SeasonListViewModel = require("../view-models/season-list-view-model");

var seasonList = new SeasonListViewModel([]);
var pageData = new Observable({
    seasonList: seasonList
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;
    
    seasonList.load();   
    console.log("Loaded page");
}

console.log("Loaded Module");