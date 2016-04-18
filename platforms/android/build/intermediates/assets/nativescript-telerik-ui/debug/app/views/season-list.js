var frameModule = require("ui/frame");
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

exports.onItemClick = function(args) {
    var itemIndex = args.itemIndex;
    var itemObject = args.object;
    
    var seasonTapped = seasonList.getItem(itemIndex);
    
    var navigationEntry = {
        moduleName: "views/season-details",
        context: seasonTapped
    }
    
    frameModule.topmost().navigate(navigationEntry);
};

console.log("Loaded Module");